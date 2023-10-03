import React from "react"
import { Route, Routes } from 'react-router-dom'

import Main from "../pages/Main"
import Login from "../pages/Login"
import User from "../pages/User"

function MainRoute() {  
    return (
        <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/Login" element={<Login />}/>
            <Route exact path="/User" element={<User />}/>
            
        </Routes>
    )
}
export default MainRoute


