import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    const navLinkCss = ({isActive}) => {
        return {
            color: isActive? "#f69110" : "#ffffff8c"
        };
    }
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="ms-auto">
                    <NavLink className="nav-link" style={navLinkCss} to="/">Home</NavLink>
                    <NavLink className="nav-link" style={navLinkCss} to="/about">About</NavLink>
                    <NavLink className="nav-link" style={navLinkCss} to="/services">Services</NavLink>
                    <NavLink className="nav-link" style={navLinkCss} to="/contact">Contact</NavLink>
                    <NavLink className="nav-link" style={navLinkCss} to="/users">Users</NavLink>
                    <NavLink className="nav-link" style={navLinkCss} to="/search">Search</NavLink>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Menu;