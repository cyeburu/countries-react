import React, { useState } from "react";
import CountriesData from "./CountriesData.json"
import ListOfCountries from "./ListOfCountries"


function SearchBox() {
    const [searchCountry, setSearchCountry] = useState(CountriesData);

    const changeInput = event => {
        const filteredList = CountriesData.filter(country => {
            return (country.name.toLowerCase().includes(event.target.value.toLowerCase()) || country.capital.toLowerCase().includes(event.target.value.toLowerCase()));
        })
        setSearchCountry(filteredList);
    }
    return (<div>
        < input
            type="search"
            className="inputBox"
            placeholder="Search button"
            onChange={changeInput}
        />
        <ListOfCountries showSearch={searchCountry} />
    </div>
    )

}
export default SearchBox;