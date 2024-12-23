import React from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import HotelDetails from './components/HotelDetails/HotelDetails';
import NotFound from './components/NotFound/NotFound';
const router = createBrowserRouter([

  { path: '' , element: <Main/>, children:[

    { path: '' , element: <Home/>},
    { path: 'home' , element: <Home/>},
    { path: 'hotels' , element: <Home/>},
    { path: 'hotels' , element: <HotelDetails/> , children:[
      { path: ':id'} // moviedetails/id => {id} is a Parameter  
    ]},
    { path: '*' , element: <NotFound/>}, // To Handle Wrong Path

  ]}

])

export default function App() {



  return <>

    <RouterProvider router={ router } />

  </>
}
