// App.jsx

import Background from "./components/Background.jsx";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Design from "./components/Design.jsx";


export default function App() {
    return (
        <Background>
            <NavBar />
            <Hero />
            <About />
            <Design />

        </Background>
    );
}
