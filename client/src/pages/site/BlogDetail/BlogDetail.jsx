import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router";
import controller from "../../../services/api/requests";
import { endpoints } from "../../../services/api/constants";
import MainContext from "../../../context/context";
import Swal from "sweetalert2";
import moment from "moment";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({ comments: [] });
  const [comment, setComment] = useState("");
  const { user } = useContext(MainContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    controller.getOne(endpoints.blogs, id).then((res) => {
      setBlog({ ...res.data });
    });
  }, [id]);

  useEffect(() => {
    controller.getAll(endpoints.users).then((res) => {
      setUsers([...res.data]);
    });
  }, []);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (user?.id) {
      const newComment = {
        _id: new Date().getTime().toString(), // Generate a unique ID for the comment
        userId: user.id,
        content: comment,
        createdAt: new Date(),
      };
      controller.patch(endpoints.blogs, blog._id, {
        comments: [...blog.comments, newComment],
      });
      setBlog((prevBlog) => ({
        ...prevBlog,
        comments: [...prevBlog.comments, newComment],
      }));
      setComment("");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Comment Shared",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "Login to Add Comment",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleCommentDelete = (x) => {
    const updatedComments = blog.comments.filter((comment) => comment.createdAt !== x);
    controller.patch(endpoints.blogs, blog._id, {
      comments: updatedComments,
    });
    setBlog((prevBlog) => ({
      ...prevBlog,
      comments: updatedComments,
    }));
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Comment Deleted",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      <Helmet>
        <title>BlogDetail</title>
      </Helmet>
      <div className="holder">
        <div className="container d-flex">
          <div className="col-9 aside aside--content">
            <div className="post-full">
              <h2 className="post-title">{blog.title}</h2>
              <div className="post-links">
                <div className="post-date">
                  <i className="icon-calendar"></i>
                  {moment(blog.createdAt).format("LLL")}
                </div>
                <a href="#" className="post-link">
                  by {blog.author}
                </a>
                <a href="#postComments" className="js-scroll-to">
                  <i className="icon-chat"></i>
                  {blog.comments.length} Comment(s)
                </a>
              </div>
              <div
                className="post-img image-container"
                style={{ paddingBottom: "54.44%" }}
              >
                <img
                  className="fade-up-fast ls-is-cached lazyloaded"
                  src={blog.src}
                  alt=""
                />
              </div>
              <div className="post-text">
                <p>{blog.description?.slice(0, 1000)}.</p>
                {/* Additional post content goes here */}
              </div>
              <div className="post-bot">
                <ul className="tags-list post-tags-list">
                  <li><a href="#">Goodwin</a></li>
                  <li><a href="#">Seiko</a></li>
                  <li><a href="#">Banita</a></li>
                  <li><a href="#">Bigsteps</a></li>
                </ul>
                <a href="#" className="post-share">
                  <div className="addthis_inline_share_toolbox"></div>
                </a>
              </div>
            </div>
            <div className="post-comments mt-3 mt-md-4" id="postComments">
              <h3 className="h2-style">Post Comments</h3>
              {blog.comments.length > 0 ? (
                blog.comments.map((item, index) => {
                  const currentUser = users.find((x) => x._id === item.userId);
                  return (
                    <div key={index} className="post-comment">
                      <div className="row">
                        <div className="col-auto">
                          <div className="post-comment-author-img">
                            <img
                              src={currentUser?.src || ""}
                              alt=""
                              
                              height={"100px"}
                              width={"100px"}

                              style={{objectFit:"cover",objectPosition:"top",borderRadius:"50%"}}
                            />
                          </div>
                        </div>
                        <div className="col">
                          <div className="post-comment-date">
                            <i className="icon-calendar"></i>
                            {moment(item.createdAt).format("LLL")}
                          </div>
                          <div className="post-comment-author">
                            <a href="#">{currentUser?.username}</a>
                          </div>
                          <div className="post-comment-text">
                            <p>{item.content}</p>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p>No Comment Yet</p>
              )}
            </div>
            <div className="post-comment-form mt-3 mt-md-4">
              <h3 className="h2-style">Leave Your Comment</h3>
              <form onSubmit={handleCommentSubmit} className="comment-form">
                <div className="form-group">
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="form-control form-control--sm textarea--height-100"
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <button className="btn" type="submit">
                  Submit Comment
                </button>
              </form>
            </div>
          </div>
          <div className="col-3 aside aside--sidebar aside--right">
            <div className="aside-content">
              <div className="aside-block">
                <h2 className="text-uppercase">Popular Tags</h2>
                <ul className="tags-list">
                  <li><a href="#">jeans</a></li>
                  <li><a href="#">hand bags</a></li>
                  <li><a href="#">gift card</a></li>
                  <li><a href="#">goodwin</a></li>
                  <li><a href="#">seiko</a></li>
                  <li><a href="#">banita</a></li>
                  <li><a href="#">foxic</a></li>
                </ul>
              </div>
              <div className="aside-block">
                <h2 className="text-uppercase">Popular Posts</h2>
                <div className="post-prw-simple-sm">
                  <a href="blog-post.html" className="post-prw-img">
                    <img
                      src="https://big-skins.com/frontend/foxic-html-demo/images/blog/blog-05.webp"
                      className="fade-up ls-is-cached lazyloaded"
                      alt=""
                    />
                  </a>
                  <div className="post-prw-links">
                    <div className="post-prw-date">
                      <i className="icon-calendar"></i>August 27, 2020
                    </div>
                    <a href="#" className="post-prw-author">by Jon Cock</a>
                  </div>
                  <h4 className="post-prw-title">
                    <a href="#">FOXic shopify theme</a>
                  </h4>
                  <a href="#" className="post-prw-comments">
                    <i className="icon-chat"></i>15 comments
                  </a>
                </div>
              </div>
              <div className="aside-block">
                <h2 className="text-uppercase">Meta</h2>
                <ul className="list list--nomarker">
                  <li><a href="#">Log in</a></li>
                  <li><a href="#">Entries RSS</a></li>
                  <li><a href="#">Comments RSS</a></li>
                </ul>
              </div>
              <div className="aside-block">
                <h2 className="text-uppercase">Archives</h2>
                <ul className="list list--nomarker">
                  <li><a href="#">January 2018</a></li>
                  <li><a href="#">February 2018</a></li>
                  <li><a href="#">March 2018</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
