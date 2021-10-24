import React, {Component} from 'react';
import LocationCard from '../cards/LocationCard';
import axios from 'axios';


function LocationsGrid() {

    axios.get('http://localhost:5000/').then(res => console.log(res.data.properties))
    
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3">
                <LocationCard />
                <LocationCard />
                <LocationCard />
            </div>
        </>
    )
}

export default LocationsGrid