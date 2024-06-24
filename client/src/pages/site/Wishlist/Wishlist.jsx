import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MainContext from "../../../context/context";
import ProductCard from "../../../components/site/Cards/ProductCard/ProductCard";
import { Helmet } from "react-helmet-async";

const Wishlist = () => {
  const { wishlist, user } = useContext(MainContext);
  return (
    <div className="holder">
      <Helmet>
        <title> Wishlist </title>
      </Helmet>

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

            {wishlist.length > 0 ? (
              <div className="prd-grid-wrap position-relative d-flex">
                {wishlist && wishlist.map((item, index) => (
                    <ProductCard key={index} data={item}></ProductCard>
                  ))}
              </div>
            ) : (
              <div className="empty-wishlist js-empty-wishlist text-center py-3 py-sm-5 ">
                <h3>Your Wishlist is empty</h3>
                <div className="mt-5">
                  <Link to="/" className="btn">
                    Continue shopping
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
