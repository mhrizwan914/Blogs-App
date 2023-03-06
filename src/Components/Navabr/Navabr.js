import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    const navLinkCss = ({isActive}) => {
        return {
            color: isActive? "#ffffff" : "yellow"
        };
    }
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink style={navLinkCss} to="/">Home</NavLink>
                    <NavLink style={navLinkCss} to="/about">About</NavLink>
                    <NavLink style={navLinkCss} to="/contact">Contact</NavLink>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Menu;