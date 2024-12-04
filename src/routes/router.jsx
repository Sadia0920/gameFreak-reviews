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

const router =  createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: 'allReviews',
                element: <AllReviews></AllReviews>,
            },
           {
                path: 'addReviews',
                element: <AddReviews></AddReviews>,
           },
           {
                path: 'myReviews',
                element: <MyReviews></MyReviews>,
           },
           {
                path: 'gameWatchList',
                element: <GameWatchList></GameWatchList>,
           },
           {
                path: 'register',
                element: <Register></Register>,
           },
           {
                path: 'login',
                element: <Login></Login>,
           }
        ]
    }
])

export default router