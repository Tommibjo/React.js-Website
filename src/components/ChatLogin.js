import React, {useState} from 'react'
import Chat from './Chat'


const ChatLogin = () => {
    const [newName, setNewName] = useState();
    const [name, setName] = useState();

    const handleNameChange = (event) => {
        console.log(event.target.value);
        setNewName(event.target.value)
    }
    const handleNameSubmit = (event) => {
        event.preventDefault()
        setName(newName)
        console.log({ newName })
    }
    if (name === undefined) {
        return (
            <div>
                Nimimerkki:
            <form onSubmit={handleNameSubmit}>
                    <input value={newName} onChange={handleNameChange} />
                    <input type="submit" value="Chattiin" />
                </form>
            </div>
        )
    } else {
        return (
            <Chat nimi={newName} />
        )
    }
}

export default ChatLogin