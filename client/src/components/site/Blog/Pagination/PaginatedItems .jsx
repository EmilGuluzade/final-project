import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import BlogCard from "../../Cards/BlogCard/BlogCard";
import MainContext from "../../../../context/context";

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <BlogCard key={index} data={item}></BlogCard>
        ))}
    </>
  );
}

function PaginatedItems({ itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);
  const { blogs } = useContext(MainContext);
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
      <div class="col-9 aside aside--content">
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
      <div class="col-3 aside aside--sidebar aside--right">
				<div class="aside-content">
					<div class="aside-block">
	<h2 class="text-uppercase">Popular Tags</h2>
	<ul class="tags-list">
		<li><a href="#">jeans</a></li>
		<li><a href="#">hand bags</a></li>
		<li><a href="#">gift card</a></li>
		<li><a href="#">goodwin</a></li>
		<li><a href="#">seiko</a></li>
		<li><a href="#">banita</a></li>
		<li><a href="#">foxic</a></li>
	</ul>
</div>
<div class="aside-block">
	<h2 class="text-uppercase">Popular Posts</h2>
	<div class="post-prw-simple-sm">
	<a href="blog-post.html" class="post-prw-img">
		<img src="https://big-skins.com/frontend/foxic-html-demo/images/blog/blog-05.webp" data-src="images/blog/blog-05.webp" class="fade-up ls-is-cached lazyloaded" alt=""/>
	</a>
	<div class="post-prw-links">
		<div class="post-prw-date"><i class="icon-calendar"></i>August 27, 2020</div>
		<a href="#" class="post-prw-author">by Jon Cock</a>
	</div>
	<h4 class="post-prw-title"><a href="#">FOXic shopify theme</a></h4>
	<a href="#" class="post-prw-comments"><i class="icon-chat"></i>15 comments</a>
</div>
</div>
<div class="aside-block">
	<h2 class="text-uppercase">Meta</h2>
	<ul class="list list--nomarker">
		<li><a href="#">Log in</a></li>
		<li><a href="#">Entries RSS</a></li>
		<li><a href="#">Comments RSS</a></li>
	</ul>
</div>
<div class="aside-block">
	<h2 class="text-uppercase">Archives</h2>
	<ul class="list list--nomarker">
		<li><a href="#">January 2018</a></li>
		<li><a href="#">February 2018</a></li>
		<li><a href="#">March 2018</a></li>
	</ul>
</div>
				</div>
			</div>
    </div>
  );
}

export default PaginatedItems;
