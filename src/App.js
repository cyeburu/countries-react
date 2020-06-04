import React from 'react';
import './App.css';
import CountriesData from './CountriesData';
import ListOfCountries from "./ListOfCountries"


function App() {
  return (
    <div >
      <ListOfCountries CountriesInfo={CountriesData} />
    </div>
  );
}

export default App;
