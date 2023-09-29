import React from "react"
import { Route, Routes } from 'react-router-dom'
import Main from "../Main"


function MainRoute() {  
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            {/* <Route path="/logements/:logementId" element={<Card Data={fetchedData} />} />
            <Route path="/Apropos" element={<Apropos />}/>
            <Route path="*" element={<Error />} /> */}
        </Routes>
    )
}
export default MainRoute


