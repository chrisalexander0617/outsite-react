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
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <LocationCard />
                    <LocationCard />
                    <LocationCard />
                </div>
            </>
        )
    }
}


export default LocationsGrid