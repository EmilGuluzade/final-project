import { ListItem } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({data}) => {
  return (
    <div class="post-prw">
    <div class="row vert-margin-middle d-flex">
      <div class="post-prw-img col-lg-6 ">
        <a href="blog-post.html">
          <img
            src={data.src}
            data-src="images/blog/blog-01.webp"
            class="fade-up lazyloaded"
            alt=""
          />
        </a>
      </div>
      <div class="post-prw-text col-lg-6 ">
        <div class="post-prw-links">
          <div class="post-prw-date">
            <i class="icon-calendar"></i>{data.createdAt}
          </div>
          <div class="post-prw-date">
            <i class="icon-chat"></i>{data.comments?.length} comments
          </div>
        </div>
        <h4 class="post-prw-title">
          <Link to={`/blogd/${data._id}`}>{data.title}</Link>
        </h4>
        <div class="post-prw-teaser">
        {data.description.slice(0,180)}...
        </div>
        <div class="post-prw-btn">
          <Link to={`/blog/${data._id}`} class="btn btn--sm">
            Read More
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BlogCard
