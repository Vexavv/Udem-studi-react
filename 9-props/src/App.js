import './App.css';
import Petinfo from "./components/Petinfo";

function App() {
    return (
        <div className="App">
            <Petinfo animal="dog" age={3}/>
            <Petinfo animal="cat" age={9}/>
        </div>
    );
}

export default App;
