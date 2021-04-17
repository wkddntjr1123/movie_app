import React from "react"
import { Link } from "react-router-dom"
function Navigation(){
    return (
        <div className="nav-bar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    )
}
export default Navigation