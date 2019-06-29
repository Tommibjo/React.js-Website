import React from 'react'
import ChatLogin from './ChatLogin'

const PageContent = ({ content }) => {

    if (content === "Koti") {
        return (
            <div>
                <div className="cooltitle"><h1>WELCOME</h1> </div>
                <div className="coolcontent">So simple yet so elegant.</div>
            </div>
        )
    } else if (content === "Chat") {
        return (
            <div>
               <ChatLogin/>
            </div>
        )
    } else if (content === "Java") {
        return (
            <div>
                Eka sivu
            </div>
        )
    } else if (content === "ReactJS") {
        return (
            <div>
                Toka sivu
            </div>
        )

    } else if (content === "About") {
        return (
            <div>
                <div className="cooltitle"><h1>WHY NOT!</h1> </div>
                <div className="coolcontent">This is my first React.js UI & I like it.</div>
            </div>
        )
    }
}

export default PageContent