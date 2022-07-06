import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";

function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Services />
            <Portfolio />
            <Blog />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
