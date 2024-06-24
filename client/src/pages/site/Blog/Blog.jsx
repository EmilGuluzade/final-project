import React from "react"
import PaginatedItems from "../../../components/site/Blog/Pagination/PaginatedItems ";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <div class="holder">
        <Helmet>
            <title>Blog</title>
        </Helmet>
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
