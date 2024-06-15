import React from "react";
import BlogCard from "../../../components/site/Cards/BlogCard/BlogCard";
import PaginatedItems from "../../../components/site/Blog/Pagination/PaginatedItems ";

const Blog = () => {
  return (
    <div class="holder">
      <div class="container">
        <div class="page-title text-center">
          <h1>Our Blog</h1>
        </div>
        <PaginatedItems  itemsPerPage={3} ></PaginatedItems>
       
      </div>
    </div>
  );
};

export default Blog;
