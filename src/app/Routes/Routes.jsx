import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import { LoginPage } from "../Pages/Login/Login";
import { Home } from "../Pages/Home/Home";
import { AdminPage } from "../Pages/AdmPage/AdminPage";
import { Menu } from "../Pages/Menu/Menu";

const AllRoutes = () => {
   return(
    <BrowserRouter>
        <Routes>
            <Route path="/"index element={<Home />} />
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/admin" element={<AdminPage/>}/>
            <Route path="/menu" element={<Menu/>}/>
        </Routes>
    </BrowserRouter>
   )
}

export default AllRoutes;