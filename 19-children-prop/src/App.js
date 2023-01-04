import './App.css';
import Wrapper from "./component/Wrapper";

function App() {
    return (
        <div className="App">
            <Wrapper color="blue">
                <h2>Text inside of Wrapper</h2>
            <button>Click me</button>
            </Wrapper>
            <Wrapper color="lightgreen">
                <h2>Another Text</h2>
                <p> Some description</p>
                <input type="text" placeholder="hello"/>
            </Wrapper>
        </div>
    );
}

export default App;
