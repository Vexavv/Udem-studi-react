import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [cards, setCards] = useState(null)

    useEffect(() => {
        fetch('shop.json')
            .then(res => res.json())
            .then(list =>
                setCards(list))
    }, [])

    console.log('app render')
    console.log(cards)


    return (
        <div className="App">{cards && <h1>{cards.name}</h1>}

        </div>
    );
}

export default App;
