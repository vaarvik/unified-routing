import logo from './logo.svg';
import './App.css';
import 'shared-web-components';

function App() {
    return (
        <div className="App">
            <header-component text="Hola!"></header-component>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>ARGUS BRO!</p>
            </header>
        </div>
    );
}

export default App;
