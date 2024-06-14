
import AdminRoot from "../pages/admin/AdminRoot";
import DashBoard from "../pages/admin/DashBoard/DashBoard";
import About from "../pages/site/About/About";
import FAQ from "../pages/site/FAQ/FAQ";
import Home from "../pages/site/Home/Home";
import SiteRoot from "../pages/site/SiteRoot";





const ROUTES = [

    {
        path:"/",
        element:<SiteRoot/>,
        children:[
            {
                path:"",
                element:<Home/>,
            },
            {
                path:"about",
                element:<About/>,
            },
            ,
            {
                path:"faq",
                element:<FAQ/>,
            }
        ]

    },
    
    {
        path:"/admin",
        element:<AdminRoot  />,
        children:[
            {
                path:"",
                element:<DashBoard/>,
            }
        ]

    }
];

export default ROUTES