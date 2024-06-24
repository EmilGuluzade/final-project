import React, { useEffect,useState} from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router";
import controller from "../../../services/api/requests";
import { endpoints } from "../../../services/api/constants";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  useEffect(() => {
    controller.getOne(endpoints.blogs, id).then((res) => {
      setBlog({ ...res.data });
    });
  }, [id]);
  return (
    <>
      <Helmet>
        <title> BlogDetail</title>
      </Helmet>

      <div className="holder">
        <div className="container d-flex">
        <div className="col-9 aside aside--content">
        <div className="post-full">
      <h2 className="post-title">{blog?.title}</h2>
      <div className="post-links">
        <div className="post-date"><i className="icon-calendar"></i>{blog?.createdAt}</div>
        <a href="#" className="post-link">by {blog?.author}</a>
        <a href="#postComments" className="js-scroll-to"><i className="icon-chat"></i>{blog.comments?.length} Comment(s)</a>
      </div>
      <div className="post-img image-container" style={{ paddingBottom: '54.44%' }}>
        <img className="fade-up-fast ls-is-cached lazyloaded" src={blog?.src} data-src="https://big-skins.com/frontend/foxic-html-demo/images/blog/blog-02.webp" alt="" />
      </div>
      <div className="post-text">
      <p>{blog?.description?.slice(0,1000)}.</p>
        <blockquote>
          <div>But in certain circumstances and owing to the claims of duty or obligations of business it willfrequently occur that pleasures have to be repudiated and annoyances accepted.</div>
          <div className="blockquote-author"><a href="#">Jon Cock</a></div>
        </blockquote>
        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>
        <div className="mt-3"></div>
        <div className="row">
          <div className="col-sm"><img className="fade-up lazyloaded" src="https://big-skins.com/frontend/foxic-html-demo/images/blog/blog-04.webp" data-src="images/blog/blog-04.webp" alt="" /></div>
          <div className="col-sm mt-3 mt-md-0">
            <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
          </div>
        </div>
        <p>Consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>
        <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.</p>
        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</p>
      </div>
      <div className="post-bot">
        <ul className="tags-list post-tags-list">
          <li><a href="#">Goodwin</a></li>
          <li><a href="#">Seiko</a></li>
          <li><a href="#">Banita</a></li>
          <li><a href="#">Bigsteps</a></li>
        </ul>
        <a href="#" className="post-share">
          <script src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5d92f2937e44d337"></script>
          <div className="addthis_inline_share_toolbox"></div>
        </a>
      </div>
    </div>
    <div className="post-comments mt-3 mt-md-4" id="postComments">
      <h3 className="h2-style">Post Comments</h3>

      {/* First Comment */}
      <div className="post-comment">
        <div className="row">
          <div className="col-auto">
            <div className="post-comment-author-img">
              <img src="	https://big-skins.com/frontend/foxic-html-demo/images/blog/comment-author.webp" alt="" className="rounded-circle" />
            </div>
          </div>
          <div className="col">
            <div className="post-comment-date"><i className="icon-calendar"></i>October 27, 2020</div>
            <div className="post-comment-author"><a href="#">Miles Black</a></div>
            <div className="post-comment-text">
              <p>Well how fantastic do I feel now. Awesome to say the least. The customer service was outstanding, being on the larger side I am very self conscious, your team of beautiful kind-hearted ladies made me feel very special. I actually found two wonderful outfits and couldn't be any happier.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Comment */}
      <div className="post-comment">
        <div className="row">
          <div className="col-auto">
            <div className="post-comment-author-img">
              <img src="	https://big-skins.com/frontend/foxic-html-demo/images/blog/comment-author-2.webp" alt="" className="rounded-circle" />
            </div>
          </div>
          <div className="col">
            <div className="post-comment-date"><i className="icon-calendar"></i>October 15, 2020</div>
            <div className="post-comment-author"><a href="#">Jenny Parker</a></div>
            <div className="post-comment-text">
              <p>Customer support has been excellent, as any small issues, minor bugs or even small requests have all been catered for in a quick, professional and timely manner.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div className="post-comment-form mt-3 mt-md-4">
      <h3 className="h2-style">Leave Your Comment</h3>
      <form action="#" className="comment-form">
        <div className="form-group">
          <div className="row vert-margin-middle">
            <div className="col-lg">
              <input type="text" name="name" className="form-control form-control--sm" placeholder="Name" required />
            </div>
            <div className="col-lg">
              <input type="text" name="email" className="form-control form-control--sm" placeholder="Email" required />
            </div>
          </div>
        </div>
        <div className="form-group">
          <textarea className="form-control form-control--sm textarea--height-200" name="message" placeholder="Message" required></textarea>
        </div>
        <button className="btn" type="submit">Submit Comment</button>
      </form>
    </div>
        </div>

          <div class="col-3 aside aside--sidebar aside--right">
            <div class="aside-content">
              <div class="aside-block">
                <h2 class="text-uppercase">Popular Tags</h2>
                <ul class="tags-list">
                  <li>
                    <a href="#">jeans</a>
                  </li>
                  <li>
                    <a href="#">hand bags</a>
                  </li>
                  <li>
                    <a href="#">gift card</a>
                  </li>
                  <li>
                    <a href="#">goodwin</a>
                  </li>
                  <li>
                    <a href="#">seiko</a>
                  </li>
                  <li>
                    <a href="#">banita</a>
                  </li>
                  <li>
                    <a href="#">foxic</a>
                  </li>
                </ul>
              </div>
              <div class="aside-block">
                <h2 class="text-uppercase">Popular Posts</h2>
                <div class="post-prw-simple-sm">
                  <a href="blog-post.html" class="post-prw-img">
                    <img
                      src="https://big-skins.com/frontend/foxic-html-demo/images/blog/blog-05.webp"
                      data-src="images/blog/blog-05.webp"
                      class="fade-up ls-is-cached lazyloaded"
                      alt=""
                    />
                  </a>
                  <div class="post-prw-links">
                    <div class="post-prw-date">
                      <i class="icon-calendar"></i>August 27, 2020
                    </div>
                    <a href="#" class="post-prw-author">
                      by Jon Cock
                    </a>
                  </div>
                  <h4 class="post-prw-title">
                    <a href="#">FOXic shopify theme</a>
                  </h4>
                  <a href="#" class="post-prw-comments">
                    <i class="icon-chat"></i>15 comments
                  </a>
                </div>
              </div>
              <div class="aside-block">
                <h2 class="text-uppercase">Meta</h2>
                <ul class="list list--nomarker">
                  <li>
                    <a href="#">Log in</a>
                  </li>
                  <li>
                    <a href="#">Entries RSS</a>
                  </li>
                  <li>
                    <a href="#">Comments RSS</a>
                  </li>
                </ul>
              </div>
              <div class="aside-block">
                <h2 class="text-uppercase">Archives</h2>
                <ul class="list list--nomarker">
                  <li>
                    <a href="#">January 2018</a>
                  </li>
                  <li>
                    <a href="#">February 2018</a>
                  </li>
                  <li>
                    <a href="#">March 2018</a>
                  </li>
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
