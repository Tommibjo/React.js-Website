import React from 'react'
import Messages from './Messages'

const Chat = ({ nimi }) => {
    return (
        <>
            <div className="chat">
                <Messages nimi={nimi} />
            </div>
        </>
    )
}

export default Chat