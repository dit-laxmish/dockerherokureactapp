import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App () {
 let apiResponse= callAPI();
   return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-intro">{apiResponse}</p>
      </header>
    </div>
  );
}

function callAPI()
{
  const url = 'http://localhost:3001/api';
  var apidata = 'No response from api';
  axios.get(url)
  .then(response => {
    apidata = JSON.parse(response);
    console.log(apidata);
  })
  .catch(error => {
    apidata = error;
    console.log(error);
  })
return apidata;
}

export default App;
