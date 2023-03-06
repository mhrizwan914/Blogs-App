import { Route, Routes } from "react-router-dom";
import Home from "../Screens/Home/Home";
import About from "../Screens/About/About";
import Contact from "../Screens/Contact/Contact";
import Navbar from "../Components/Navabr/Navabr";

const Router = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="about" element={<About />}></Route>
                <Route path="contact" element={<Contact />}></Route>
            </Routes>
        </>
    );
}

export default Router;