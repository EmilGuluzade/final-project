import AdminRoot from "../pages/admin/AdminRoot";
import DashBoard from "../pages/admin/DashBoard/DashBoard";
import About from "../pages/site/About/About";
import Basket from "../pages/site/Basket/Basket";
import Blog from "../pages/site/Blog/Blog";
import Category from "../pages/site/Category/Category";
import Checkout from "../pages/site/Checkout/Checkout";
import FAQ from "../pages/site/FAQ/FAQ";
import Gallery from "../pages/site/Gallery/Gallery";
import Home from "../pages/site/Home/Home";
import Login from "../pages/site/Login/Login";
import Register from "../pages/site/Register/Register";
import SiteRoot from "../pages/site/SiteRoot";

const ROUTES = [
  {
    path: "/",
    element: <SiteRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      ,
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "category",
        element: <Category />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/basket",
        element: <Basket></Basket>,
      },
      {
        path: "/checkout",
        element: <Checkout></Checkout>,
      },
      ,
      {
        path: "/login",
        element: <Login></Login>,
      } ,
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },

  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "",
        element: <DashBoard />,
      },
    ],
  },
];

export default ROUTES;
