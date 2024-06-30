import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="col-2 adminsidebar">
      <h2 className="text-light py-4 px-2">Admin Panel</h2>
      <div class="accordion accordion-flush  " id="accordionFlushExample">
        <div class="accordion-item  accordionbg">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed accordionbg"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Products
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body adminlinks ">
              <ul>
                <li>
                  {" "}
                  <Link className=" " to={"/admin"}>
                    All Products
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link className="" to={"products/add"}>
                    Add Product
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item accordionbg">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed accordionbg"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Blogs
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body adminlinks ">
              <ul>
                <li>
                  {" "}
                  <Link className=" " to={"blogs"}>
                    All Blogs
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link className="" to={"blogs/add"}>
                    Add Blogs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item accordionbg">
          <h2 class="accordion-header accordionbg">
            <button
              class="accordion-button collapsed accordionbg"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Users
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body adminlinks ">
              <ul>
                <li>
                  {" "}
                  <Link className=" " to={"users"}>
                    All Users
                  </Link>{" "}
                </li>
              </ul>
            </div>
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Header;
