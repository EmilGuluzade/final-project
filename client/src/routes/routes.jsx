import Error from "../pages/Error/Error";
import AdminRoot from "../pages/admin/AdminRoot";
import DashBoard from "../pages/admin/DashBoard/DashBoard";
import About from "../pages/site/About/About";
import AccountDetails from "../pages/site/AccountDetail/AccountDetails";
import Basket from "../pages/site/Basket/Basket";
import Blog from "../pages/site/Blog/Blog";
import BlogDetail from "../pages/site/BlogDetail/BlogDetail";
import Category from "../pages/site/Category/Category";
import Checkout from "../pages/site/Checkout/Checkout";
import Contact from "../pages/site/Contact/Contact";
import FAQ from "../pages/site/FAQ/FAQ";
import Gallery from "../pages/site/Gallery/Gallery";
import Home from "../pages/site/Home/Home";
import Login from "../pages/site/Login/Login";
import ProductDetail from "../pages/site/ProductDetail/ProductDetail";
import Register from "../pages/site/Register/Register";
import SiteRoot from "../pages/site/SiteRoot";
import Wishlist from "../pages/site/Wishlist/Wishlist";

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
        path: "/about",
        element: <About />,
      },
      ,
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/blog/:id",
        element: <BlogDetail></BlogDetail>,
      },{
        path: "/product/:id",
        element: <ProductDetail></ProductDetail>,
      },
      {
        path:"/accountdetails",
        element: <AccountDetails></AccountDetails>,

      },
      {
        path: "/basket",
        element: <Basket></Basket>,
      },
      {
        path: "/wishlist",
        element: <Wishlist></Wishlist>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
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
  {
    path: "*",
    element: <Error></Error>,
  }
];

export default ROUTES;
