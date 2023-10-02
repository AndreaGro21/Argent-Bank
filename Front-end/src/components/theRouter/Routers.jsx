import React from "react"
import { Route, Routes } from 'react-router-dom'

import Main from "../pages/Main"
import Login from "../pages/Login"


function MainRoute() {  
    return (
        <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/Login" element={<Login />}/>
            {/* <Route path="/logements/:logementId" element={""} />
            <Route path="*" element={""} />  */}
        </Routes>
    )
}
export default MainRoute


