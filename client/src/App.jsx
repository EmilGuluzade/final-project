import { RouterProvider, createBrowserRouter, json } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import ROUTES from "./routes/routes";
import "bootstrap/dist/css/bootstrap.css";
import MainContext from "./context/context";
import { MAIN_URL } from "./config/config";
import Swal from "sweetalert2";
import controller from "./services/api/requests";
import { endpoints } from "./services/api/constants";
function App() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const router = createBrowserRouter(ROUTES);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [basket, setBasket] = useState(
    localStorage.getItem("basket")
      ? JSON.parse(localStorage.getItem("basket"))
      : []
  );
  const [wishlist, setWishlist] = useState(
    localStorage.getItem("wishlist")
      ? JSON.parse(localStorage.getItem("wishlist"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [basket, wishlist]);

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: null,
          role: "",
          wishlist: [],
          basket: [],
        })
      );
    }
  }, []);

  function addToBasket(id) {
    let basketItem = basket.find((x) => x._id == id);

    if (!basketItem) {
      let target = data.find((x) => x._id == id);

      let newItem = {
        ...target,
        count: 1,
        totalPrice: target.price,
      };
      setBasket([...basket, newItem]);
    } else {
      basketItem.count += 1;
      basketItem.totalPrice += basketItem.price;
      setBasket([...basket]);
    }
  }

  function toggleWishList(id) {
    let wishItem = wishlist.find((x) => x._id == id);

    if (!wishItem) {
      let target = data.find((x) => x._id == id);
      setWishlist([...wishlist, { ...target }]);
      alert("Item Added To WishList");
    } else {
      setWishlist([...wishlist.filter((x) => x._id != id)]);
      alert("Item Deleted From WishList");
    }
  }

  function deleteFromBasket(id) {
    let target = basket.find((x) => x._id == id);
    if (target.count <= 1) {
      setBasket([...basket.filter((x) => x._id != id)]);
    } else {
      target.count -= 1;
      target.totalPrice -= target.price;
      setBasket([...basket]);
    }
  }

  function login(user) {
    localStorage.setItem(
      "user",
      JSON.stringify({
        role: user.role,
        id: user._id,
        wishlist: user.wishlist,
        basket: user.basket,
      })
    );

    setUser(JSON.parse(localStorage.getItem("user")));


  }
  function logout() {
    localStorage.setItem(
      "user",
      JSON.stringify({
        id: null,
        role: "",
        wishlist: null,
        basket: null,
      })
    );
    setUser(JSON.parse(localStorage.getItem("user")));

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Signed out successfully",
      showConfirmButton: false,
      timer: 1000,
    })
    
  }

  const contextData = {
    data,
    setData,
    addToBasket,
    deleteFromBasket,
    basket,
    setBasket,
    toggleWishList,
    wishlist,
    error,
    setError,
    loading,
    setLoading,
    login,
    logout,
    user,
    setUser,
  };
  return (
    <MainContext.Provider value={contextData}>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </MainContext.Provider>
  );
}

export default App;
