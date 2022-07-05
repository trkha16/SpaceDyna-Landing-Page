import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Services />
            <Portfolio />
            <Blog />
            <Footer />
        </div>
    );
}

export default App;
