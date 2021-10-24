import React from 'react';

function LocationCard(props){
    return (
        <>
            <div className="p-5">
                <div className="locations-filter"></div>
                <img className="rounded-lg" src={props.img} />
                <h2>Location Card</h2>
            </div>
        </>
    )
}

export default LocationCard