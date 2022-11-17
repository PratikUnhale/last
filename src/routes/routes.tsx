import { Route } from "react-router-dom";
import UserHome from "../pages/User/UserHome/UserHome";
import Data from "../pages/User/Data/Data";
import Reports from "../pages/User/Reports/Reports";
import Home from "../pages/Home/Home";
import ForgotPassword from "../components/Forms/ForgotPassword/ForgotPassword";
import ForgotPasswordLink from "../components/Forms/ForgotPassword/ForgotPasswordLink";
import Login from "../components/Forms/Login/Login";


const routeMap: any = {

    HOME: {
        MainPage: <Home />,
        ChildRoutes: [
            { path: "/", element: <Login />, index: true },
            { path: "forgotPassword", element: <ForgotPassword /> },
            { path: "forgotPassword/:id", element: <ForgotPasswordLink /> },

        ]
    },

    USER:
    {
        MainPage: <UserHome />,
        ChildRoutes: [
            { path: "/", element: <Reports />, index: true },
            { path: "data", element: <Data /> },

        ],
    },


};

export const generateRoutes = (page: string) => {
    const routeData = routeMap[page]
    console.log(routeData)
    return <Route path="/" element={routeData.MainPage}>
        {routeData.ChildRoutes.map((element: any, index: number) => <Route {...element} key={index}></Route>)
        }
    </Route >
}