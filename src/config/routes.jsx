import { createBrowserRouter } from "react-router-dom";
import { Home, PostDetail, PostForm } from "../pages";
import { MainLayout } from "../components";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/post-form/:id?',
                element: <PostForm />
            },
            {
                path: '/post-detail/:id',
                element: <PostDetail />
            }
        ]
    }
])