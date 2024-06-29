import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import ROUTES from "./routes/routes";
import "bootstrap/dist/css/bootstrap.css";
import MainContext from "./context/context";
import Swal from "sweetalert2";
import controller from "./services/api/requests";
import { endpoints } from "./services/api/constants";
import "toastify-js/src/toastify.css";
import Toastify from "toastify-js";
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = createBrowserRouter(ROUTES);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [products, setProducts] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [basketCount, setBasketCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [basketTotal, setBasketTotal] = useState(0);
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

  // useEffect(() => {
  //   axios.get('http://localhost:8080/api/profile')
  //     .then(response => {
  //       setUser(response.data);
  //     })
  //     .catch(error => {
  //       console.log('Not authenticated');
  //       window.location.href = '/';
  //     });
  // }, []);
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    setBasketCount(basket.reduce((sum, acc) => sum + acc.count, 0));
    setWishlistCount(wishlist.reduce((sum, acc) => sum + 1, 0));
    setBasketTotal(basket.reduce((sum, acc) => sum + acc.totalPrice, 0));
  }, [basket, wishlist]);

  function addToBasket(id) {
    let basketItem = basket.find((x) => x._id == id);

    if (!basketItem) {
      let target = products.find((x) => x._id == id);

      let newItem = {
        ...target,
        count: 1,
        totalPrice: target.price,
      };
      setBasket([...basket, newItem]);
      Toastify({
        text: "Item Added to basket!",
        className: "info",
        style: {
          background: "#17c6aa",
        },
      }).showToast();
    } else {
      basketItem.count += 1;
      basketItem.totalPrice += basketItem.price;
      setBasket([...basket]);
      Toastify({
        text: "Item Added to basket!",
        className: "info",
        style: {
          background: "#17c6aa",
        },
      }).showToast();
    }
  }

  function toggleWishList(id) {
    let wishItem = wishlist.find((x) => x._id == id);

    if (!wishItem) {
      let target = products.find((x) => x._id == id);
      setWishlist([...wishlist, { ...target }]);
      Toastify({
        text: "Item Added To Wishlist!",
        className: "info",
        style: {
          background: "#17c6aa",
        },
      }).showToast();
    } else {
      setWishlist([...wishlist.filter((x) => x._id != id)]);
      Toastify({
        text: "Item Deleted From Wishlist!",
        className: "info",
        style: {
          background: "#17c6aa",
        },
      }).showToast();
    }
  }

  function deleteFromBasket(id) {
    let target = basket.find((x) => x._id === id);
    if (target.count <= 1) {
      setBasket([...basket.filter((x) => x._id !== id)]);
      Toastify({
        text: "Item Removed From basket!",
        className: "info",
        style: {
          background: "#17c6aa",
        },
      }).showToast();
    } else {
      target.count -= 1;
      target.totalPrice -= target.price;
      setBasket([...basket]);
      Toastify({
        text: "Item Decreased in basket!",
        className: "info",
        style: {
          background: "#17c6aa",
        },
      }).showToast();
    }
  }

  function resetBasket() {
    setBasket([]);
    localStorage.setItem("basket", JSON.stringify([]));
    console.log("salam");
    Toastify({
      text: "Basket Has Been Reset",
      className: "info",
      style: {
        background: "#17c6aa",
      },
    }).showToast();
  }

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
  }, [user]);
  useEffect(() => {
    async function getAll() {
      const resPro = await controller.getAll(endpoints.products);
      const resblog = await controller.getAll(endpoints.blogs);
      setBlogs(resblog.data);
      setProducts(resPro.data);
      setLoading(false);
    }

    getAll();
  }, []);

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
    });
  }
    const getUser = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/profile");
  
        if (response.status === 200) {
          console.log(response.data.user); 
          setUser(response.data.user);
        } else {
          throw new Error("Authentication failed");
        }
      } catch (error) {
        console.error("Fetch error:", error);
        window.location.href = '/login';
      }
    };
  
    
  

  const contextData = {
    basket,
    setBasket,
    error,
    setError,
    loading,
    setLoading,
    login,
    logout,
    user,
    setUser,
    products,
    setProducts,
    blogs,
    addToBasket,
    deleteFromBasket,
    toggleWishList,
    resetBasket,
    wishlist,
    basketCount,
    wishlistCount,
    basketTotal,
    getUser
 
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      const aosElements = document.querySelectorAll("[data-aos]");
      aosElements.forEach((el) => {
        el.removeAttribute("data-aos");
      });
    }
  }, []);
  return (
    <MainContext.Provider value={contextData}>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </MainContext.Provider>
  );
}

export default App;
