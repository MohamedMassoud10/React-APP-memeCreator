import React from "react"
import "./index.css"
import img from "./imges/Logo (1).png"
export default function Header() {
    return (
        <header className="header">
            <div className="logo">
                <div className="im">
                    <img src={img} alt="" />
                </div>
            </div>
            <div className="header-title">
                <h3>React Prctise</h3>
            </div>
        </header>
    )
}