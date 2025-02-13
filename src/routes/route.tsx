import App from "@/App";
import Task from "@/Pages/task";
import Users from "@/Pages/users";

import { createBrowserRouter } from "react-router-dom";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {
                index: true,
                element:<Task/>
            },
            {
                path:"users",
                element:<Users/>
            },
        
         
        ]
    } 
]);

export default routes;