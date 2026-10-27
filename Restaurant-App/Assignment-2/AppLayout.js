import React from 'react';
import ReactDOM from 'react-dom/client'
import Header from './Components/Header';
import RestaurantList from './Components/RestaurantList';
import { Outlet } from 'react-router-dom';


const AppLayout = () =>{
 return (
  <>
    <Header/>
    <Outlet/>
  </>
 )
}

export default AppLayout




