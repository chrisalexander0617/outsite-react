import React, {Component, useState, useEffect} from 'react';
import LocationCard from '../cards/LocationCard';
import axios from 'axios';


function LocationsGrid() {
    const [ properties, setProperties ] = useState();


    useEffect(() => {
        fetchPropertiesData()
    },[])

    const url = 'http://localhost:5000/';

    const fetchPropertiesData = () => {
        axios.get(url)
        .then(res => {
            const allProperties = res.data.properties;
            console.log(allProperties);
            setProperties(allProperties)
        })
        .catch(err => console.log(err))
    }

    if(properties){
        const locationCards = properties.map((property, i) => (<LocationCard key={i} img={property.wfContent.cityImage} />))

        return (
            <>
             <div className="grid grid-cols-1 md:grid-cols-8 gap-4 my-10">
                 <button className="px-2 py-2 rounded-full">Filter</button>
                 <button className="px-2 py-2 bg-blue-200 text-white rounded-full">Filter</button>
                 <button className="px-2 py-2 rounded-full">Filter</button>
                 <button className="px-2 py-2 rounded-full">Filter</button>
             </div>
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {locationCards}
                </div>
            </>
        )
    } else {
        return (
            <div>No Properties yet</div>
        )
    }
    
}

export default LocationsGrid