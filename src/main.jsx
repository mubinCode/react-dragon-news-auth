import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AuthProvider from "./AuthProvider/AuthProvider";
import Root from "./Components/Root";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";
import NewsDetails from "./Components/NewsDetails";
import PrivateRoutes from "./routes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path:'/',
        element:<Home/>,
        loader: () => fetch('/news.json')
      },
      {
        path:'/about',
        element:<Home/>
      },
      {
        path:'/career',
        element:<Home/>
      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/news/:id',
        element:<PrivateRoutes><NewsDetails/></PrivateRoutes>
      },
      
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
