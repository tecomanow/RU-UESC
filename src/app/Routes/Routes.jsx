import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import { LoginPage } from "../Pages/Login/Login";
import { Home2 } from "../Pages/Home2/Home2";

const AllRoutes = () => {
   return(
    <BrowserRouter>
        <Routes>
            <Route path="/"index element={<Home2 />} />
            <Route path="/login" element={<LoginPage/>}>
            </Route>
        </Routes>
    </BrowserRouter>
   )
}

export default AllRoutes;