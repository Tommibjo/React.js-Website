import React, {useState} from 'react'
import Menu from './components/Menu'
import Page from './components/Page'

const App = () => {
    const [sivu, vaihdaSivu] = useState("Koti");
    const handleClick = (valinta) => () => vaihdaSivu(valinta);
    return (
        <div>
            <Menu handleClick={handleClick} />
            <Page page={sivu} />
        </div>
    )
}

export default App