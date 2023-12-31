import './App.css';
import React from 'react';
import {  Switch } from "react-router";
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { Link} from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';

import './components/home.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./components/home.scss";
import "./components/queries.css";
import "./components/cities.css";


import Home from './components/services';
import Citiesavailable from './components/Cities';
import Building from './components/Building/building';
import Regform from './components/forms/regform';
import Servicepage from './components/Servicespage';
import Admin from './components/Admin/admin';
import All from './components/Building/All'
function  App() {
  const [listofBuilding,setListOfBuilding] = useState([]);
  const [buildingId,setBuildingId] = useState('');


useEffect(()=>{
  axios.get('http://127.0.0.1:5008/getBuildings')
  .then((response) =>{
      setListOfBuilding(response.data);
      // console.log(response.data);
      })
},[]);


  return ( 
  <div>
  
<Router>
     
          <Routes>
           
              <Route exact={true} path='/' element={<Home />}>
              </Route>

              <Route  path='/cities' element={<Citiesavailable />}>
              </Route>
            
              <Route  path='/table' element={<table/>}>
              </Route>


          <Route  path='/building' element={<All/>}></Route>

          <Route path='/building/:building' element={<Building/>}></Route>
            
              <Route  path='/service' element={<Servicepage/>}>
              </Route>
             
              <Route  path='/regform' element={<Regform/>}>
              </Route>

              <Route  path='/admin' element={<Admin/>}>
              </Route>

          </Routes>

      
          
          
     </Router>
  </div>

  );
}

export default App;
