import React, {useEffect, useState} from 'react';
// import UserComponent from '../Components/UserComponent'
import Country from './Components/Country'
import CountryForm from './Components/CountryForm'
import DestinationsApi from './Components/DestinationsApi'

function App(){
  const [apiData, setApiData] = useState("Loading")
const [countries, setCountries] = useState([
  {
    name:"Loading..."
  }
  // {
  //   name:"Normandy, France",
  //   isVisited: false
    
  // },
  // {
  //   name:"Puglia, Italy",
  //   isVisited: false
  
  // },
  // {
  //   name:"Dubrovnik, Croatia",
  //   isVisited: false
   
  // }
])

useEffect(
  () =>{
    fetch("http://localhost:4000/places")
    // fetch("https://restcountries.eu/rest/v2/all") //show all countries
    .then(
      res => res.json()
    ).then (jsonResponse => setCountries(jsonResponse))

  },[])

const addNewCountry = (countryName) => {
  const newCountries = [...countries, {name:countryName}]
  setCountries(newCountries)

}

const removeCountry = (index) => {
  const newCountries = [...countries]
  newCountries.splice(index, 1)
  setCountries(newCountries)

}

const lineThruCountry = (index) => {
  const newCountries = [...countries]
  newCountries[index].isVisited = newCountries[index].isVisited ? false: true
  setCountries(newCountries)
}

const displayCountries = countries.map((country, index) =>(
  <Country removeCountry={removeCountry} country={country} index={index} lineThruCountry = {lineThruCountry}/>
))

return (
  
    <div className="bodyCopy">
    {/* <h1 className="UserComponent"><UserComponent user="Countries I want to visit"/></h1> */}
      <p>I love traveling and I've been to many places but there are still some areas I'd love visit.</p>
      <h3 style={{color: "green"}}>Here is a list of a few places I plan to visit:</h3>
      <h4>{displayCountries}</h4>
      <h3>Know any cool places I should visit? Feel free to add them to my list!</h3>
      <CountryForm  addNewCountry ={addNewCountry}/>
      {/* <p>{apiData[0].name}</p> */}
     {/* <DestinationsApi /> */}
    </div>
  
)
}

export default App

