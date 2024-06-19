import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MainContext from "../../../context/context";
import ProductCard from "../../../components/site/Cards/ProductCard/ProductCard";

const Wishlist = () => {
  const { user } = useContext(MainContext);
  return (
    <div className="holder">
      <div className="container">
        <div className="row">
          <div className="col-3 aside aside--left">
            <div className="list-group">
              <Link to="/accountdetails" className="list-group-item">
                Account Details
              </Link>
              <Link to="/wishlist" className="list-group-item active">
                My Wishlist
              </Link>
              <Link to="/order" className="list-group-item">
                My Order History
              </Link>
            </div>
          </div>
          <div className="col-9 aside">
            <h1 className="mb-3">My Wishlist</h1>

            {
                user.wishlist.length > 0 ? (
              <div className="prd-grid-wrap position-relative">
               

              </div>
            ) : (
              <div className="empty-wishlist js-empty-wishlist text-center py-3 py-sm-5 "
               
              >
                <h3>Your Wishlist is empty</h3>
                <div className="mt-5">
                  <Link to="/" className="btn">
                    Continue shopping
                  </Link>
                </div>
              </div>
            )
            
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
