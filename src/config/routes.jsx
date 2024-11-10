import { createBrowserRouter } from "react-router-dom";
import { Home, PostDetail, PostForm } from "../pages";
import { PostItem, MainLayout } from "../components";

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
                path: '/post-form',
                element: <PostForm />
            },
            {
                path: '/post-detail',
                element: <PostDetail />
            },
            {
                path: '/post-item',
                element: <PostItem
                    image="https://picsum.photos/800"
                    title="Image Title"
                    name="Siti Zakiyah"
                    date="13 Nov 2024"
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in accumsan magna. Cras pellentesque ornare felis sed faucibus. Quisque mollis turpis est, vitae tempor sem porttitor at. Donec eget pretium diam."
                />
            }
        ]
    }
])