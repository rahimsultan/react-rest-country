import { useEffect, useState } from "react";
import Country from "./Country/Country";
import VisitedCountry from "./VisitedCountry/VisitedCountry";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [isListed, setListed] = useState([]);

    const handleListed = (name, img)=>{
        setListed([...isListed, {name, img}])
        // console.log(isListed);
    }
    
    useEffect(() => {
        const fetchData = async () =>{
            const res = await fetch('https://restcountries.com/v3.1/all');
            const data = await res.json();
            setCountries(data)
        }
        fetchData()
        
    }, [])
    
  return (
    <div>
        <h2 className="text-xl font-bold p-3">Countrues: {countries.length}</h2>
        <VisitedCountry visited={isListed} />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 md:grid-cols-3 max-w-7xl mx-auto">
            {
                countries.map((country, i)=> <Country key={i} country={country} handleListed={handleListed}/> )
            }
        </div>
    </div>
  )
}

export default Countries