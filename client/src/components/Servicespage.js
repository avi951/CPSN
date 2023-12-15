import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import Mylogo from '../images/CPSN.png'
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import SearchBar from './SearchBar';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/DropdownButton';
import './Services1.css';
import { Button } from '@mui/material';
import MultiCarousel from '../Carousel/MultiItemCarousel';
import Footer from './Footer';
import MultiCarousel2 from '../Carousel2/buildingcarousel';
import Register from "./Register";


function Services1 ()
{
    return(
        <div>
            <Navbar>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={Mylogo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    <Nav className="me-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#link">services</Nav.Link>    
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="Login/Register"
                                menuVariant="dark"
                            >
                                <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Register Business</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Rent Offices</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
            </Navbar>


            <div className='select-service'>

                <div className='Hero-text'>
                    Where do you want to find 
                    <span><h1>Lawyer</h1></span>
                    services?

                </div>

                <div className='Selections'>

                <label for="India" className='country'>India</label>
                <label for="India" className='State'>Gujarat</label>
                
                <select name="City" id="cars" className='Dds9'>
                    <option value="volvo">Ahmedabad</option>
                    <option value="saab">Gandhinagar</option>
                </select>

                <select name="Area" id="cars" className='Dds9'>
                    <option value="volvo">Bodakdev</option>
                    <option value="saab">Thaltej</option>
                </select>

                </div>
                <div className='srch-btn'>
                    <button type="button" className='search-btn'>Search</button>
                </div>
                <div className='or'>
                    OR
                </div>
                <SearchBar placeholder="Search for a Service.."  />
            </div>


            <section>
                        <MultiCarousel/>
            </section> 

            <section>
                        <MultiCarousel2/>
            </section> 


            <section>
                        <Register/>
            </section> 

                        <Footer/>

        </div>

        

    );
}
export default Services1;