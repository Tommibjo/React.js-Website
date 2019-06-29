import React, {useState} from 'react'
import SendMessage from './SendMessage'

const Messages = ({ nimi }) => {
    const [comments, setComments] = useState([
        {
            senderId: "Tommi",
            text: "who'll win?"
        },
        {
            senderId: "Lind",
            text: "who'll win?"
        }
    ])
    console.log(comments)
    return (
        <>
            <ul>
                {comments.map(value => <li key={value.id}>
                    <div>{value.senderId}</div>
                    <div>{value.text}</div>
                </li>)}
            </ul>
            <SendMessage nimi={nimi} />
        </>
    )
}

export default Messages