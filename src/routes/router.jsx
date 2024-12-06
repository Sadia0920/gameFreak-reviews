import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Error from "../pages/Error"
import Home from "../pages/Home"
import AllReviews from './../pages/AllReviews';
import AddReviews from './../pages/AddReviews';
import MyReviews from './../pages/MyReviews';
import GameWatchList from './../pages/GameWatchList';
import Register from './../pages/Register';
import Login from './../pages/Login';
import PCGameDetails from "../pages/PCGameDetails";
import VRGameDetails from "../pages/VRGameDetails";
import PlayStationGameDetails from "../pages/PlayStationGameDetails";
import MobileGameDetails from "../pages/MobileGameDetails";
import PrivateRoute from "./PrivateRoute";

const router =  createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=>fetch('http://localhost:5000/reviews')
            },
            {
                path: '/allReviews',
                element: <AllReviews></AllReviews>,
                loader: ()=>fetch('http://localhost:5000/reviews')
            },
           {
                path: '/addReviews',
                element: <PrivateRoute><AddReviews></AddReviews></PrivateRoute>,
           },
           {
                path: '/myReviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
           },
           {
                path: '/gameWatchList',
                element: <PrivateRoute><GameWatchList></GameWatchList></PrivateRoute>,
           },
           {
                path: '/register',
                element: <Register></Register>,
           },
           {
                path: '/login',
                element: <Login></Login>,
           },
           {
                path: '/pcGameDetails',
                element: <PCGameDetails></PCGameDetails>,
           },
           {
                path: '/vrGameDetails',
                element: <VRGameDetails></VRGameDetails>,
           },
           {
                path: '/playStationGameDetails',
                element: <PlayStationGameDetails></PlayStationGameDetails>,
           },
           {
                path: '/mobileGameDetails',
                element: <MobileGameDetails></MobileGameDetails>,
           },
        ]
    }
])

export default router