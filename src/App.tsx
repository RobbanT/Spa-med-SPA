import "./App.css";
import Header from "./components/Header";
import MenuBar from "./components/MenuBar";
import Main from "./components/Main";
import { useState } from "react";

function App() {
    const [page, setPage] = useState<string>("");
    return (
        <>
            <Header />
            <MenuBar setPage={setPage} />
            <Main page={page} />
        </>
    );
}

export default App;
