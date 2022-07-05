import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Services />
            <Portfolio />
        </div>
    );
}

export default App;
