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
import ReviewDetails from "../pages/ReviewDetails";
import UpdateReview from "../pages/UpdateReview";
import AboutUs from './../pages/AboutUs';

const router =  createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=>fetch('https://game-freak-reviews-server.vercel.app/reviews')
            },
            {
                path: '/allReviews',
                element: <AllReviews></AllReviews>,
                loader: ()=>fetch('https://game-freak-reviews-server.vercel.app/reviews')
            },
            {
                path: '/aboutUs',
                element: <AboutUs></AboutUs>,
            },
            {
                path: '/reviewDetails/:id',
                element: <ReviewDetails></ReviewDetails>,
                loader: ({params})=>fetch(`https://game-freak-reviews-server.vercel.app/reviews/${params.id}`)
            },
           {
                path: '/addReviews',
                element: <PrivateRoute><AddReviews></AddReviews></PrivateRoute>,
           },
           {
                path: '/myReviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
                loader: ()=>fetch('https://game-freak-reviews-server.vercel.app/reviews')
           },
           {
               path: '/updateReview/:id',
               element: <PrivateRoute><UpdateReview></UpdateReview></PrivateRoute>,
               loader: ({params})=>fetch(`https://game-freak-reviews-server.vercel.app/reviews/${params.id}`)
          },
           {
                path: '/gameWatchList',
                element: <PrivateRoute><GameWatchList></GameWatchList></PrivateRoute>,
                loader: ()=>fetch(`https://game-freak-reviews-server.vercel.app/watchList`)
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