import logo from "./logo.svg";
import {useState} from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
    const [mode, setMode] = useState("light");
    const toggleMode = () => {
        if(mode === "dark"){
            setMode("light");
            document.body.style.backgroundColor = "white";
        }else {
            setMode("dark");
            document.body.style.backgroundColor = "grey";
        }
    }
    return (
        <>
            <Navbar title="TextUtility" mode={mode} toggleMode={toggleMode}/>
            <div className="container my-3">
                <TextForm heading="Text Analyzer"/>
                {/*  <About />*/}
            </div>
        </>
    );
}

export default App;
