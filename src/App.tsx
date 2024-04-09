import "./App.css";
import Header from "./components/Header";
import MenuBar from "./components/MenuBar";
import About from "./components/About";
import Home from "./components/Home";
import Reservation from "./components/Reservation";
import Staff from "./components/Staff";
import { useState } from "react";

function App() {
    const [page, setPage] = useState<string>("");
    return (
        <>
            <Header />
            <MenuBar setPage={setPage} />
            <main>
                <div id="container">
                    {{
                        home: <Home />,
                        reservation: <Reservation />,
                        staff: <Staff />,
                        about: <About />,
                    }[page] || <Home />}
                </div>
            </main>
        </>
    );
}

export default App;
