import React, {useState} from 'react'

const SendMessage = ({ nimi }) => {
    const [comment, setComment] = useState();
    const handleCommentChange = (event) => {
        console.log(event.target.value);
        setComment(event.target.value);
    }

    const handleCommentSubmit = (event) => {
        event.preventDefault();
        console.log(nimi + comment);
        const newObject = {
            id: 3,
            senderId: nimi,
            text: comment,
        }
        console.log(newObject)
        //    DUMMY_DATA.push(newObject)
        //   console.log(DUMMY_DATA)
    }

    return (
        <form onSubmit={handleCommentSubmit}>
            <input value={comment} onChange={handleCommentChange} />
            <input type="submit" value="DropIt" />
        </form>
    )
}

export default SendMessage