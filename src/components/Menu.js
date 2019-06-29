import React from 'react'

const Menu = ({ handleClick }) => {
    return (
        <ul className="menu">
            <li className="menuoption" onClick={handleClick("Koti")}> KOTI</li>
            <li className="menuoption" onClick={handleClick("Chat")}> CHAT</li>
            <li className="menuoption" onClick={handleClick("Java")}> JAVA </li>
            <li className="menuoption" onClick={handleClick("ReactJS")}> REACTJS</li>
            <li className="menuoption" onClick={handleClick("About")}>WHY?</li>
        </ul>
    )
}

export default Menu