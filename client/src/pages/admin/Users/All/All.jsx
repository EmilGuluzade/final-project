import React, { useContext, useEffect, useState } from "react";
import controller from "../../../../services/api/requests";
import { endpoints } from "../../../../services/api/constants";

const DataTable = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  async function deleteItem(id) {
    const response = await controller.delete(endpoints.users, id);
    setData([...data.filter((x) => x._id !== id)]);
  }
  useEffect(() => {
    async function getAll() {
      const resPro = await controller.getAll(endpoints.users);
      setData(resPro.data);
    }

    getAll();
  }, []);
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredData.slice(
    indexOfFirstEntry,
    indexOfLastEntry
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="col-10 datatable-wrapper ">
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
        <Table deleteItem={deleteItem} data={currentEntries} />
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
          <a
            href="#"
            onClick={() => paginate(currentPage - 1)}
            className="datatable-pagination-list-item-link"
          >
            ‹
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`datatable-pagination-list-item ${
              currentPage === number && "datatable-active"
            }`}
          >
            <a
              href="#"
              onClick={() => paginate(number)}
              className="datatable-pagination-list-item-link"
            >
              {number}
            </a>
          </li>
        ))}
        <li
          className={`datatable-pagination-list-item ${
            currentPage === pageNumbers.length && "datatable-disabled"
          }`}
        >
          <a
            href="#"
            onClick={() => paginate(currentPage + 1)}
            className="datatable-pagination-list-item-link"
          >
            ›
          </a>
        </li>
      </ul>
    </nav>
  );
};

const Table = ({ data, deleteItem }) => {
  return (
    <div className="datatable-container ">
      <table className="datatable-table ">
        <thead>
          <tr>
            <th>Images</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>BanCount</th>
            <th>IsVerified</th>
            <th>CreatedAt</th>
            <th>UpdatedAt</th>
            <th>Buttons</th>
          </tr>
        </thead>
        <tbody>
          {data.filter(x=>x.role=="client").map((item, index) => (
            <tr key={index}>
              <td>
                <img src={item.src} width={"60px"} height={"70px"} alt="" />
              </td>
              <td>{item.username}</td>

              <td>{item.email}</td>
              <td>{item.role}</td>
              <td>{item.banCount}</td>
              <td>{item.isVerified ? "verified" :"not"}</td>
              <td>{item.createdAt}</td>
              <td>{item.updatedAt}</td>

              <td>
                {" "}
                {/* <button className="edit-btn">
                  <i
                    class="fa-light fa-pen-to-square"
                    style={{ color: "#fffff" }}
                  ></i>
                </button> */}
                <button
                  onClick={() => deleteItem(item._id)}
                  className="delete-btn"
                >
                  <i
                    class="fa-regular fa-trash"
                    style={{ color: "#fffff" }}
                  ></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const All = () => {
  return (
    <>
      <DataTable></DataTable>
    </>
  );
};

export default All;
