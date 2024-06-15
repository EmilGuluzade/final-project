import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <div class="post-prw">
    <div class="row vert-margin-middle d-flex">
      <div class="post-prw-img col-lg-6 ">
        <a href="blog-post.html">
          <img
            src="	https://big-skins.com/frontend/foxic-html-demo/images/blog/blog-01.webp"
            data-src="images/blog/blog-01.webp"
            class="fade-up lazyloaded"
            alt=""
          />
        </a>
      </div>
      <div class="post-prw-text col-lg-6 ">
        <div class="post-prw-links">
          <div class="post-prw-date">
            <i class="icon-calendar"></i>10 nov, 2020
          </div>
          <div class="post-prw-date">
            <i class="icon-chat"></i>5 comments
          </div>
        </div>
        <h4 class="post-prw-title">
          <Link to="/blogdetail/:id">Home page visual builder</Link>
        </h4>
        <div class="post-prw-teaser">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco
        </div>
        <div class="post-prw-btn">
          <a to="/blogdetail/:id" class="btn btn--sm">
            Read More
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BlogCard
