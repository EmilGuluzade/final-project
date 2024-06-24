import React, { useEffect, useState } from "react";
import controller from "../../../../services/api/requests";
import { endpoints } from "../../../../services/api/constants";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortUp, faSortDown, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

// Pagination Component
const Pagination = ({
  entriesPerPage,
  totalEntries,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalEntries / entriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="datatable-pagination">
      <ul className="datatable-pagination-list">
        <li
          className={`datatable-pagination-list-item ${
            currentPage === 1 && "datatable-disabled"
          }`}
        >
          <button
            onClick={() => paginate(currentPage - 1)}
            className="datatable-pagination-list-item-link"
            disabled={currentPage === 1}
          >
            ‹
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`datatable-pagination-list-item ${
              currentPage === number && "datatable-active"
            }`}
          >
            <button
              onClick={() => paginate(number)}
              className="datatable-pagination-list-item-link"
            >
              {number}
            </button>
          </li>
        ))}
        <li
          className={`datatable-pagination-list-item ${
            currentPage === pageNumbers.length && "datatable-disabled"
          }`}
        >
          <button
            onClick={() => paginate(currentPage + 1)}
            className="datatable-pagination-list-item-link"
            disabled={currentPage === pageNumbers.length}
          >
            ›
          </button>
        </li>
      </ul>
    </nav>
  );
};

// Table Component
const Table = ({ data, deleteItem, requestSort, sortConfig }) => {
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const renderSortIcon = (key) => {
    if (!sortConfig || sortConfig.key !== key) {
      return <FontAwesomeIcon icon={faSort} />;
    }
    if (sortConfig.direction === "ascending") {
      return <FontAwesomeIcon icon={faSortUp} />;
    }
    return <FontAwesomeIcon icon={faSortDown} />;
  };

  return (
    <div className="datatable-container">
      <table className="datatable-table">
        <thead>
          <tr>
            <th>Images</th>
            <th>
              <button
                type="button"
                onClick={() => requestSort('title')}
                className="sort-button"
              >
                Name {renderSortIcon('title')}
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort('author')}
                className="sort-button"
              >
                Author {renderSortIcon('author')}
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort('description')}
                className="sort-button"
              >
                Description {renderSortIcon('description')}
              </button>
            </th>
            
            <th>Buttons</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                <img
                  src={item.src}
                  width={"100px"}
                  height={"70px"}
                  alt=""
                />
              </td>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>{item.description?.slice(0,200)}...</td>
             
              <td className="">
                <Link
                  to={`edit/${item._id}`}
                  className="d-inline-block edit-btn"
                >
                  <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#ffffff" }} />
                </Link>
                <button
                  onClick={() => deleteItem(item._id)}
                  className="delete-btn"
                >
                  <FontAwesomeIcon icon={faTrash} style={{ color: "#ffffff" }} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// DataTable Component
const DataTable = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });

  async function deleteItem(id) {
    const response = await controller.delete(endpoints.blogs, id);
    setData([...data.filter((x) => x._id !== id)]);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Blog Deleted",
      showConfirmButton: false,
      timer: 1000,
    });
  }

  useEffect(() => {
    async function getAll() {
      const resPro = await controller.getAll(endpoints.blogs);
      setData(resPro.data);
    }
    getAll();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const sortedData = React.useMemo(() => {
    let sortableData = [...data];
    if (sortConfig.key) {
      sortableData.sort((a, b) => {
        if (typeof a[sortConfig.key] === "string") {
          a[sortConfig.key] = a[sortConfig.key].toLowerCase();
          b[sortConfig.key] = b[sortConfig.key].toLowerCase();
        }
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [data, sortConfig]);

  const filteredData = sortedData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredData.slice(
    indexOfFirstEntry,
    indexOfLastEntry
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="col-10 datatable-wrapper">
      <div className="datatable-top">
        <div className="datatable-dropdown">
          <label>
            <select
              value={entriesPerPage}
              onChange={(e) => setEntriesPerPage(Number(e.target.value))}
              className="datatable-selector"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
            </select>{" "}
            entries per page
          </label>
        </div>
        <div className="datatable-search">
          <input
            className="datatable-input"
            placeholder="Search..."
            type="search"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="overflow-x-scroll">
        <Table
          deleteItem={deleteItem}
          data={currentEntries}
          requestSort={requestSort}
          sortConfig={sortConfig}
        />
      </div>
      <div className="datatable-bottom">
        <div className="datatable-info">
          Showing {indexOfFirstEntry + 1} to {indexOfLastEntry} of{" "}
          {filteredData.length} entries
        </div>
        <Pagination
          entriesPerPage={entriesPerPage}
          totalEntries={filteredData.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

const All = () => {
  const navigate = useNavigate();
  const userLocal = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (userLocal.role !== "admin") {
      navigate("/");
    }
  }, [navigate, userLocal]);
  return (
    <>
      <DataTable />
    </>
  );
};

export default All;
