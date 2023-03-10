import {Route, Routes } from "react-router-dom";
import Home from "../Screens/Home/Home";
import About from "../Screens/About/About";
import Contact from "../Screens/Contact/Contact";
import Navbar from "../Components/Navabr/Navabr";
import NotFound from "../Screens/NotFound/NotFound";
import Services from "../Screens/Services/Services";
import SEO from "../Screens/Services/SEO/SEO";
import Web from "../Screens/Services/Web/Web";
import Users from "../Screens/Users/Users";
import UserDetails from "../Screens/Users/UserDetails/UserDetails";
import Search from "../Screens/Search/Search";

const Router = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />}>
                    <Route index element={<SEO />} />
                    <Route path="seo" element={<SEO />} />
                    <Route path="web" element={<Web />} />
                </Route>
                <Route path="/users" element={<Users />} />
                <Route path="/users/:id" element={<UserDetails />} />
                <Route path="/search" element={<Search />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default Router;