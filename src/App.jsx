import {BrowserRouter} from "react-router-dom";
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components'
import Preloader from "./components/Preloader/Preloader.jsx";
import Hero2 from "./components/Hero2.jsx";

const App = () => {
  return (
    <BrowserRouter>
        <div className="relative z-0">
            <Preloader/>
            <div>
                <Navbar/>
                <Hero2/>
            </div>
            <About/>
            <Tech/>
            <Experience/>
            <Works/>
            {/*<Feedbacks/>*/}
            <div className="relative z-0 bg-primary">
                <Contact/>
                {/*<StarsCanvas/>*/}
            </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
