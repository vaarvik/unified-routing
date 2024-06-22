import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>VACAY BRO!</p>
                <Link to="/about">Go to About</Link>
            </header>
        </div>
    );
}

function About() {
    return (
        <div className="App">
            <header className="App-header">
                <p>About Page</p>
                <Link to="/">Go to Home</Link>
            </header>
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
