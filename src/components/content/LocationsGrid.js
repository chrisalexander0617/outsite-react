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