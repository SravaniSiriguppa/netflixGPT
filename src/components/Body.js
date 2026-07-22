import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Browse from "../components/Browse";

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/browse",
            element: <Browse />,
        },
    ]);

    return <RouterProvider router={appRouter}></RouterProvider>;
};

export default Body;
