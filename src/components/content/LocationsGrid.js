import React, {Component} from 'react';
import LocationCard from '../cards/LocationCard';

class LocationsGrid extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }   

    render(){
        return (
            <>
                <LocationCard />
            </>
        )
    }
}


export default LocationsGrid