import logo from './logo.svg';
import './App.css';
import 'shared-web-components';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>ARGUS BRO!</p>
            </header>
            <header-component text="Hello World!"></header-component>
        </div>
    );
}

export default App;
