import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BlogPage from "../components/BlogPage";
import Contact from "../components/Contact";
import Details_page from "../components/Details_page";
import ListPage from "../components/list/ListPage";
import MapPage from "../components/MapPage";
import Slide from "../components/Slide";
import UpdateProfile from "../components/UpdateProfile";
import ErrorPage from "../ErrorPage/ErrorPage";
import Root from "../Layouts/Root";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App></App>,
      },
    
      {
        path: "/propertyDetails/:id",
        element: (
          <PrivateRoute>
            <Details_page></Details_page>
          </PrivateRoute>
        ),
        loader: () => fetch("/properties.json"),
      },
      {
        path: "/UpdateProfile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
       
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/list",
        element:   <PrivateRoute><ListPage></ListPage></PrivateRoute>,

      },
      {
        path: "/slide",
        element: <Slide></Slide>,

      },
      {
        path: "/blogs",
        element: <BlogPage></BlogPage>,

      },
      {
        path: "/contact",
        element: <Contact></Contact>,

      },
    ],
  },
]);

export default router;
