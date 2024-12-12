import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import GetData from "../pages/GetData";
import ValidationForm from "../pages/ValidationForm";
import NotFound from "../pages/NotFound";
import Producs from "../pages/crudSpring/Producs";

export const router = createBrowserRouter([
    {
        element: <Layout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:'/getdata',
                element:<GetData/>
            },
            {
                path:'/hook-form',
                element:<ValidationForm/>
            },
            {
                path:"/products",
                element:<Producs/>
            },
        ]
    },
    {
        path:"*",
        element:<NotFound/>
    }
])