import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./home";
import { Post } from "./components/Post/Post";

export function AppRoutes(){
    return(
        <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/post" Component={Post} />
        </Routes>
    )
}