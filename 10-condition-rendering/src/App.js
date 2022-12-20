import './App.css';
import Petinfo from "./components/Petinfo";

function App() {
    return (
        <div className="App">
            <Petinfo animal="dog" age={3} hasPet/>
            <Petinfo animal="cat" age={9} hasPet={false}/>
        </div>
    );
}

export default App;
