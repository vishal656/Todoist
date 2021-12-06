import React from 'react'
import overflow from "../Assets/images/overflow.jpg"
function Header() {
    return (
        <header className="header">
            <nav>
                <div className="logo">
                    <img src={overflow} alt="Todolist" height="50px"/>
                </div>
            </nav>
        </header>
    )
}

export default Header
