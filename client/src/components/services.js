import SearchBar from "./SearchBar";
import SearchBar2 from "./SearchBar2";
import { useState,useEffect } from "react";
import axios from "axios";
import React from "react";
import BookData from "./Data.json";
// import buildata from "../components/building.json";
import Mylogo from '../images/CPSN.png';

import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import MultiCarousel from '../Carousel/MultiItemCarousel';
import Footer from './Footer';
import MultiCarousel2 from '../Carousel2/buildingcarousel';
import Register from "./Register";
import './Building/building.css';


function Home ()
{
    const [listofBuilding,setListOfBuilding] = useState([]);
    const [buildingId,setBuildingId] = useState('');
  
  
  useEffect(()=>{
    axios.get('http://127.0.0.1:5008/getBuildings')
    .then((response) =>{
        setListOfBuilding(response.data);
        console.log(response.data);
        })
  },[]);

    return(
        /* Home-page*/           
           <div className ="Main">      
                {/*Nav bar  */}
                {/* Main 1st page of Website */}
            <div className="Mainpage">
            <Navbar>
            <Container>
                <Navbar.Brand>
                    <div className="imagelogo">
                    <img style={{width:"100px"}} src={Mylogo} alt="Logo" /></div>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    <Nav className="me-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#link">Services</Nav.Link>    
                        <Nav.Link href="/regform">Register</Nav.Link>    
                        </Nav>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
            </Navbar>
                       <h1>Connecting Professional Services Nearby</h1>
                                             <div className="Search-box">
                                             <SearchBar className="name" placeholder="Search for a Building.." data={listofBuilding} />
                                             </div>
                                            <h2 className="Or">Or</h2>
                                             <div className="Search-box2">
                                             <SearchBar2 className="name" onClick="passval()" placeholder="Search for a Service.." data={BookData} />
                                             </div>
            </div>

            <section>

                    <div className='calculation'>
                        <div className='calculationservices'>
                            
                        </div>

                        <div className='featuredservices'>

                        </div>


                    </div>



            </section>


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
export default Home;