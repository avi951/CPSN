
//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import '../home.scss' 


//Navbar
import { NavDropdown } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import Mylogo from '../../images/CPSN.png'
import { useState,useEffect } from 'react';
import { useParams, withRouter } from "react-router";

import axios from 'axios';
import MultiCarousel from '../../Carousel/MultiItemCarousel';
import Footer from '../Footer';
import MultiCarousel2 from '../../Carousel2/buildingcarousel';
import Register from "../Register";
import { FindInPage } from '@material-ui/icons';

const Building = ()=>{    
    
    const params = useParams();
    const [listofBuilding,setListOfBuilding] = useState([]);
    const [lastSegment, setLastSegment] = useState("");
    const [isLoading, setisLoading] = useState("true");

  
//   useEffect(()=>{
//     const url = window.location.href;
//     const last = url.substring(url.lastIndexOf("/") + 1);

//     var final = ""
//     if(!last.includes("%20")){
//         final = last;
//     }
//     else{
//         final = last.replace("%20", " ")

//     }    
//     setLastSegment(final);

//     axios.get(`http://127.0.0.1:5008/getBuildings/${lastSegment}`)
//     .then((response) =>{
//             setListOfBuilding(response.data);
//             console.log('Building'+response.data);
//         })
//   },[]);



useEffect(()=>{
    const url = window.location.href;
    const last = url.substring(url.lastIndexOf("/") + 1);

    // console.log(last) 
    setLastSegment(last);
    // console.log(lastSegment)

    axios.get(`http://127.0.0.1:5008/getBuildingsName/${last}`)
    .then((response) =>{
            setListOfBuilding(response.data);
            console.log(response.data);
            const lastName = last.replace("%20"," ")
            setLastSegment(lastName)
            setisLoading('false')
        })
  },[]);


return (
 
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
                        <Nav.Link href="#link">Services</Nav.Link>    
                            <NavDropdown
                                id="nav-dropdown-example"
                                title="Login/Register"    
                            >
                                <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Register Business</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Rent Offices</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Search Services</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
            </Navbar>

            <div>
        {/* <h1 className="admin">ADMIN PANEL</h1> */}
        {/* {listofBuilding.map((user,index)=>{
            return(
                <h1>{user.building}</h1>
            )
        })} */}

        <div className='Building-heading'><h1>{lastSegment}</h1></div>

        <table className="rwd-table">
        <tbody>
        <tr>
        {/* <th>First Name</th> */}
        {/* <th>Last Name</th> */}
        <th>Building Name</th>
        <th>Floor</th>
        <th>Block No</th>
        <th>Office No</th>
        <th>Status</th>
        <th>Company Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>City</th>
        <th>State</th>
        <th>Pincode</th>
        <th>Service</th>
        </tr>
        {listofBuilding.map((user,index)=>{
                return (
                    <tr key={index}>
                    <td data-th="Building Name">{user.building}</td>
                    <td data-th="Floor">{user.floorNumber}</td>
                    <td data-th="Block No">{user.block}</td>
                    <td data-th="Office No">{user.officeNumber}</td>
                    <td data-th="Status">{user.status}</td>
                    <td data-th="Company Name">{user.comName}</td>
                    <td data-th="Email">{user.email}</td>
                    <td data-th="Phone">{user.phone}</td>
                    <td data-th="City">{user.city}</td>
                    <td data-th="State">{user.state}</td>
                    <td data-th="Pincode">{user.pincode}</td>
                    {/* <td data-th="Service"><a href={"/"+user.service}>{user.service.join(' ')}</a></td> */}
         
                    <td data-th="Service">{user.service.map((value,i)=>
                    {return (<a href={"/"+value}>{value}&nbsp;</a>)})}</td>
                    </tr>                 
                )
            })}
            </tbody>
            </table>
            </div>

  
         <MultiCarousel/>
         <MultiCarousel2/>
         <Register/>
         <Footer/>

  </div>
);
}




export default Building;