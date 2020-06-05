import React from "react"

const ListOfCountries = props => {
    return (
        <div className="container">
            {props.showSearch.map((element, index) => {
                return (<div key={index} className="card">
                    <img className="image" src={element.flag} alt="" />
                    <h1 className="countriesName">{element.name}</h1>
                    <p className="population">Population: {element.population}</p>
                    <p className="region">Region: {element.region}</p>
                    <p className="capital">Capital: {element.capital}</p>
                </div>)
            }
            )}
        </div>
    )
};
export default ListOfCountries;