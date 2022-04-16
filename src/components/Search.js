import React, { useState } from 'react';
import Select, { makeAnimated } from 'react-select';

import JSONDATA from '../Tricks.json'

var tricks = require("../Tricks.json");

const options = [
    { value: 'test1', label: 'Test 1' },
    { value: 'test2', label: 'Nollie Inward Heelflip' },
    { value: 'test3', label: 'Test 3' },
    { value: 'test4', label: 'Test 4' },
    { value: 'test5', label: 'Test 5' }
  ]

function onChangeInput(value){
    console.log(value);
}



function Search() {

  return (
    <div className="select">

        <Select
            
            placeholder="Search 🔎"
            isSearchable
            options={options}
            
        />
        
    </div>
  )
}

export default Search

//https://www.youtube.com/watch?v=mZvKPtH9Fzo  


// <input type="text" placeholder="Search..." />