import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error";
import Home from '../views/Home';
import Layout from '../components/BasicUI/Layout';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    },
]);

const AppRouter = () => <RouterProvider router={router} />

export default AppRouter 