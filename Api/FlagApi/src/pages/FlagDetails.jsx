import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const FlagDetails =() => {
    const { countryName } = useParams();
    
    const [flag, setFlag] = useState({});

    useEffect(() => {
        getFlag();
    }, [countryName]);

    const getFlag = async () => {
        try {
          const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
          if (response.ok) {
            const [countryData] = await response.json();
            setFlag(countryData);
          } else {
            throw new Error("Country not found.");
          }
        } catch (error) {
          console.log(error);
        }
      };

      
  return <div>
         <h1>{countryName}</h1>
      <h2>Country Details:</h2>
      <p>Capital: {flag.capital}</p>
      <p>Population: {flag.population}</p>
      <p>Region: {flag.region}</p>
      
  </div>
}

export default FlagDetails;