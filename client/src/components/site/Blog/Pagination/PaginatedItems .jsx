import React, { useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import BlogCard from '../../Cards/BlogCard/BlogCard';
import MainContext from '../../../../context/context';



function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item,index) => (
            <BlogCard key={index} data={item}></BlogCard>

        ))}
    </>
  );
}

function PaginatedItems({ itemsPerPage }) {

  const [itemOffset, setItemOffset] = useState(0);
  const {blogs}=useContext(MainContext)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = blogs.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(blogs.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % blogs.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div class="row off-sidebar">
    <div class="col-md-12 aside aside--content">
      <div class="post-prws-listing p-3">

    <Items currentItems={currentItems} />

          <ReactPaginate
                 nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
          />

      </div>

    </div>
    </div>
  );
}

export default PaginatedItems
