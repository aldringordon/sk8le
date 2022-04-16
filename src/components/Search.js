import React, { useState } from 'react'

import JSONDATA from '../Tricks.json'

var tricks = require("../Tricks.json");

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

function onChangeInput(value){
    console.log(value);
}

function Search() {

  return (
    <div>

        <input type="text" placeholder="Search..." />
    </div>
  )
}

export default Search

//https://www.youtube.com/watch?v=mZvKPtH9Fzo