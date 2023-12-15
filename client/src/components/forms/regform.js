import "./regform.css";
import "../Services/dropdown.css"
import    Axios  from "axios";
import    axios  from "axios";
import  React, {Component, useEffect, useState} from 'react';
import Select from 'react-select';
import {Multiselect} from "multiselect-react-dropdown";
import { Fastfood } from "@material-ui/icons";
function Regform()
{
    
   

    const services = [
        { service: "IT",
          label: "IT ( Information Technology )" 
        },
        { service: "C.A.", 
          label: "CA ( Chartered Accountant )" 
        },
        { 
          service: "Real Estate", 
          label: "Real Estate" 
        },
        { 
            service: "Electronics", 
            label: "Electronics" 
        },

      ];

    const [listofUsers,setLisOfUsers] = useState([])
    const [email,setEmail] = useState();
    const [phone,setPhone] = useState();
    const [comName,setCompanyName] = useState();
    const [block,setBlockNumber] = useState();
    const [officeNumber,setOfficeNumber] = useState();
    const [floorNumber,setFloorNumber] = useState();
    const [building,setBuilding] = useState();
    const [landmark,setLandmark] = useState();
    const [city,setCity] = useState();
    const [status, setStatus] = useState();
    const [state,setState] = useState();
    const [pincode,setPincode] =useState();
    const [err,setErr] = useState("");
    const [emptyBuildingName, setEmptyBuildingName] = useState(false)
    console.log(status)

    const [category,setCategory] = useState(services);

    const postUser = () =>{
        console.log(category)

        if(err!=="")
        {
            alert("Valiadation failed")
        }
        
        Axios.post("http://127.0.0.1:5008/register",{
            email,
            phone,
            comName,
            status,
            block,
            officeNumber,
            floorNumber,
            building,
            city,
            state,
            pincode,
            category
            
        }).then((response)=>{
            setLisOfUsers([
                ...listofUsers,
                {
                    email,
                    phone,
                    comName,
                    status,
                    block,
                    officeNumber,
                    floorNumber,
                    building,
                    city,
                    state,
                    pincode,
                    category
                },
            ])
            alert('USER CREATED');
    }).catch((err)=>{
        console.log(err);
    });
    }
    function Validate(value,fieldname)
    {
        console.log(value)
        
        const regex= /^[^*|\":<>[\]{}`\\()';@&$,]+$/;
        const regex2= /^[0-9]*$/;
        const regex3=/^[A-Za-z0-9_-]*$/;
        const regex4=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/g;
        const regex5=/^\d{9}$/;
        const regex8=/^[0-9]{1,6}$/;
        const regex7=/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
        const regex1=/\d+/;
        if(!value)
        {
            setErr("1")
        }
        else if(!regex.test(value)&&fieldname==="buildingname")
        {
            setErr("2")
            console.log(err)
        }
        else if(!regex3.test(value)&&fieldname==="Block")
        {
            setErr("3")
            console.log(err)
        }
        else if(!regex2.test(officeNumber)&&fieldname==="Office-number")
        {
            setErr("4")
        }
        else if(!regex4.test(email)&&fieldname==="Email")
        {
            setErr("5")
            console.log(err);
        }
        else if(!regex5.test(value)&&fieldname==="phone")
        {
            setErr("6")
            
            console.log(err);
        }
        else if(!regex7.test(city)&&fieldname==="city")
        {
            setErr("7")
            console.log(city);
            console.log(err);
        }
        else if(city===""&&fieldname==="city")
        {
            setErr("10")
            console.log(city);
            console.log(err);
        }
        else if(!regex7.test(state)&&fieldname==="state")
        {
            setErr("8")
            console.log(state);
            console.log(err);
        }
        else if(!regex8.test(pincode)&&fieldname==="pincode")
        {
            setErr("9")
            console.log(pincode);
            console.log(err);
        }
        else
        {
            setErr("")
        }
       
    }
    


    return(

        <div className="background">
          <div className="form-heading">
                    SERVICE REGISTRATION
            </div>
                <div className='blur'>
                        <div className='basics'>
                        </div>

                        <div className='firm-details'>
                            <div className='label1'>
                                Enter Company Details Below
                            </div>
                            
                            <div className='sinputs'>
                                <label htmlFor="name-firm" className='label2'>Building Name</label>
                                <input 
                                type="text" 
                                id="company-name" 
                                name="company-name"
                                value={building}
                                onChange={(e)=>{
                                    setBuilding(e.target.value);
                                    Validate(e.target.value,"buildingname")
                                }}   
                                placeholder=" Enter the Name of your Building" 
                                className='company-name' ></input>
                               
                                {
                                    (building==="")
                                    ?
                                    <span className="empty-validation">The building name should not be empty.</span>
                                    :
                                    null
                                }
                                {
                                    (err==="2")
                                    ?
                                    <span className="empty-validation">No Special characters allowed</span>
                                    :
                                    null
                                }
                            </div>

                            <div className='sinputs'>
                                <label htmlFor="office-firm" className='label2'>Floor</label>
                                <input 
                                type="number" 
                                id="office-number" 
                                name="office-number"  
                                onChange={(e)=>{
                                    setFloorNumber(e.target.value)
                                }}
                                placeholder="Floor" 
                                className='company-name'></input>
                            </div>
                            
                            

                            <div className='sinputs'>
                                <label htmlFor="office-firm" className='label2'>Block</label>
                                <input 
                                type="text" 
                                id="office-number" 
                                name="office-number"
                                onChange={(e)=>{
                                    setBlockNumber(e.target.value);
                                    Validate(e.target.value,"Block")
                                }}  
                                placeholder="Block" 
                                className='company-name'></input>
                                {
                                    (err==="3")
                                    ?
                                    <span className="empty-validation">No Special characters allowed</span>
                                    :
                                    null
                                }
                            </div>
                                

                            <div className='sinputs'>
                                <label htmlFor="office-firm" className='label2'>Office Number</label>
                                <input 
                                type="number" 
                                id="office-number" 
                                name="office-number"
                                onChange={(e)=>{
                                    setOfficeNumber(e.target.value,"Office-number");
                                    console.log(officeNumber);
                                    Validate(e.target.value)
                                }}  
                                placeholder="Office Number" 
                                className='company-name' ></input>
                            </div>
                                {
                                    (err==="4")
                                    ?
                                    <span className="empty-validation">Only Numbers ar allowed</span>
                                    :
                                    null
                                }
                            <div className='sinputs'>
                                <label htmlFor="office-firm" className='label2'>Status</label>
                                {/* <input 
                                type="String" 
                                id="office-number" 
                                name="office-number"  
                                onChange={(e)=>{
                                    setStatus(e.target.value)
                                }}
                                placeholder="Status" 
                                className='company-name' ></input> */}
                                <select name="Status" id="Status" onChange={(e)=>{
                                    setStatus(e.target.value)
                                }}>
                                    <option value={0} disabled selected>Select Status </option>
                                    <option value="UnOccupied">UnOccupied</option>
                                    <option value="Occupied">Occupied</option>
                                </select>
                                {
                                    (status===undefined)
                                    ?
                                    <span className="empty-validation">Select status</span>
                                    :
                                    null
                                }
                            </div>


                            <div className='sinputs'>
                                <label htmlFor="name-firm" className='label2'>Company Name</label>
                                <input 
                                type="text" 
                                id="company-name" 
                                name="company-name"  
                                onChange={(e)=>{
                                    setCompanyName(e.target.value);
                                    
                                }}  
                                placeholder=" Eneter the Name of your comapany" 
                                className='company-name' ></input>
                                {
                                    (comName==="")
                                    ?
                                    <span className="empty-validation">Company name required</span>
                                    :
                                    null
                                }
                            </div>
                                
                                
                                    
                            <div className='sinputs' >
                                <label htmlFor="email" className="label">Enter your email:</label>
                                <input 
                                type="text" 
                                id="email" 
                                name="email" 
                                placeholder='Enter email' 
                                className='email' 
                                onChange={(e)=>{
                                    setEmail(e.target.value);
                                    Validate(e.target.value,"Email");
                                    console.log(e.target.value)
                                }}></input>
                                {
                                    (err==="5")
                                    ?
                                    <span className="empty-validation">Invalid Email</span>
                                    :
                                    null
                                }
                            </div>
                            <div className='sinputs'>
                                <label className="label">Enter phone number:</label>
                                <input 
                                type="tel"
                                id="phone" 
                                name="phone" 
                                placeholder="+91-1234567890"
                                className="phone" 
                                onChange={
                                     (e)=>{setPhone(e.target.value);
                                        Validate(phone,"phone");
                                        
                                    }
                                }></input>
                                {
                                    (err==="6")
                                    ?
                                    <span className="empty-validation">Invalid phone number</span>
                                    :
                                    null
                                }
                            </div>
                            
                          

                            <div className='sinputs'>
                                <label htmlFor="name-firm" className='label2'>City</label>
                                <input 
                                type="text" 
                                id="company-name" 
                                name="company-name"
                                onChange={(e)=>{
                                    setCity(e.target.value);
                                    Validate(e.target.value,"city");
                                }}   
                                placeholder="City" 
                                className='company-name' ></input>
                                {
                                    (err==="10")
                                    ?
                                    <span className="empty-validation">City name required</span>
                                    :
                                    null
                                }
                                {
                                    (err==="7")
                                    ?
                                    <span className="empty-validation">Enetr valid city name.</span>
                                    :
                                    null
                                }
                            </div>

                            <div className='sinputs'>
                                <label htmlFor="name-firm" className='label2'>State</label>
                                <input 
                                type="text" 
                                id="company-name" 
                                name="company-name"
                                onChange={(e)=>{
                                    setState(e.target.value)
                                    Validate(e.target.value,"state");
                                }}   
                                placeholder="State" 
                                className='company-name' ></input>
                                {
                                    (err==="8")
                                    ?
                                    <span className="empty-validation">Enter valid state</span>
                                    :
                                    null
                                }
                            </div>

                            <div className='sinputs'>
                                <label htmlFor="name-firm" className='label2'>Pincode</label>
                                <input 
                                type="text" 
                                id="company-name" 
                                name="company-name"
                                onChange={(e)=>{
                                    setPincode(e.target.value);
                                    Validate(e.target.value,"pincode");                                    
                                }}   
                                placeholder="State" 
                                className='company-name' ></input>
                                {
                                    (err==="9")
                                    ?
                                    <span className="empty-validation">Enter valid pincode</span>
                                    :
                                    null
                                }
                            </div>

                            

                            <div className='label1'>
                                Logo And Photos
                            </div>

                
                            <div className='sinputs'>
                                <input 
                                type="file" 
                                id="myFile" 
                                name="filename" 
                                className='label3'></input>
                                <button  className='submit' placeholder='upload'>Upload</button>
                            </div>
                     </div>
                        {/* <Multiselect 
                        showArrow 
                        // isObject={false} 
                        onRemove={(e)=>{console.log(e);}} 
                        onSelect={(e)=>{
                            setCategory(e)
                            console.log(e)}}
                         
                        options={options} displayValue="label" showCheckbox={true} 
                        /> */}


                        <Multiselect 
                        showArrow 
                        onRemove={(e)=>{console.log(e);}} 
                        onSelect={(e)=>{setCategory(e);}}
                        options={services} displayValue="label" showCheckbox={true}/>
                        <div className="submit-btn">
                            <input type="submit" className='submit1' onClick={postUser}></input>
                        </div>
                </div> 
                <div>
                </div>     
        </div>
    )
}
export default Regform

     {/* {
                        listofUsers.map((users)=>{
                            return(
                                <>
                                <div>
                                    <h3>First Name: {users.fname}</h3>
                                    <h3>Last Name: {users.lname}</h3>
                                    <h3>Email: {users.email}</h3>
                                    <h3>Phone: {users.phone}</h3>
                                </div></>
                            )
                        })
                    } */}