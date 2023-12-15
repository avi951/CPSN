
import React, { useState ,useEffect} from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { Router, Route, useNavigate, NavLink } from 'react-router-dom';
import axios from "axios";
import { Link } from "react-router-dom";
import Building from "./Building/building";


function SearchBar({ placeholder, data }) {

  const [listofBuilding,setListOfBuilding] = useState([]);


useEffect(()=>{
  axios.get('http://127.0.0.1:5008/getBuildings')
  .then((response) =>{
      setListOfBuilding(response.data);
      // console.log(response.data);
      })
},[]);

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [variable, setVariable]= useState("");
  // const navigate = useNavigate();


  console.log({wordEntered})
  const handleFilter = (event) => {
    const searchWord = event.target.value;

    setWordEntered(searchWord);

    const newFilter = data.filter((value) => {
      // console.log(value)
      return value.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }

  };
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  const setValues = (value) =>{
    // console.log(value);
    setVariable(variable);
  }
  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            console.log('Filter'+value);
            return (
              <a key={key} className="dataItem" target="_blank">
                <div className="buildingName">
                <NavLink to={"/building/"+value}>{value}</NavLink>
                </div>
              </a>
            );
          })}
        </div>
      )}
   
    </div>

  
  );
}
export default SearchBar;