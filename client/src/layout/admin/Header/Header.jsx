import React, { useContext, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import MainContext from "../../../context/context";
import { useEffect } from "react";
import controller from "../../../services/api/requests";
import { endpoints } from "../../../services/api/constants";

const Header = () => {

  const {user,logout}=useContext(MainContext)
const [admin,setAdmin]=useState({})
  useEffect(()=>{
    async function  getAdmin() {
  const response= await controller.getOne(endpoints.users,user.id)
setAdmin({...response.data})


}
getAdmin()
  },[])
  return (
    <div className="col-2 adminsidebar  ">
      <h3 className="text-light py-4 px-3 d-flex align-items-center gap-3 " ><img width={"30px"} height={"30px"} style={{borderRadius:"50%"}} src={admin.src} alt="" /> <span><div>{admin.username}</div> <span>{admin.email}</span></span></h3>
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
          <div  class="accordion-collapse collapse"
            id="flush-collapseOne"
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
      </div>

<div className="logoutadmin"  >
  <Link className="text-light" onClick={logout}>Logout <i class="fa-solid fa-right-from-bracket mx-2"></i></Link>
</div>
    </div>
  );
};

export default Header;
