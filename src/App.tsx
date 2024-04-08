import { useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import logo from "./assets/spa-icon2.svg";
import Calendar from "react-calendar";
import About from "./components/About";
import Home from "./components/Home";
import Reservation from "./components/Reservation";
import Staff from "./components/Staff";

function App() {
    return (
        <>
            <header>
                <img src={logo} />
                <h1>Spa med SPA</h1>
            </header>
            <BrowserRouter>
                <nav>
                    <a>
                        <Link to="/home">Hem</Link>
                    </a>
                    <a>
                        <Link to="/reservation">Bokning</Link>
                    </a>
                    <a>
                        <Link to="/staff">Personal</Link>
                    </a>
                    <a>
                        <Link to="/about">Om oss</Link>
                    </a>
                </nav>

                <Switch path="/home" component={Home} />
                <Switch path="/reservation" component={Reservation} />
                <Switch path="/staff" component={Staff} />
                <Switch path="/about" component={About} />
            </BrowserRouter>
            <main>
                <div id="container">
                    <Calendar />
                </div>
            </main>
        </>
    );
}

export default App;
