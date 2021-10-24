import React, {Component} from 'react';
import DatePickerInput from './inputs/DatePickerInput';
import 'react-day-picker/lib/style.css';

class PropertiesForm extends Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            arrivalDate:null,
            departureDate:null
        }
        this.changeDepartureDate = this.changeDepartureDate.bind(this);
        this.changeArrivalDate = this.changeArrivalDate.bind(this);

    }

    changeDepartureDate(selectedDay)
    {
        console.log(selectedDay)
    }

    changeArrivalDate(selectedDay)
    {
        console.log( selectedDay)
    }

    render()
    {

        const styles = {
            marginTop:'-150px'
        }
        //const { selectedDay, isDisabled, isEmpty } = this.state;
        return ( 
            <div className="shadow-xl" style={styles}>
            <h2 className="font-bold text-white mb-10 text-3xl">Work anywhere live differently</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white p-10 rounded-lg">
                    <DatePickerInput placeholder="Arriving" handleChange={this.changeDepartureDate} />
                    <DatePickerInput placeholder="Departure" handleChange={this.changeArrivalDate} />
                    <input  className="shadow-lg p-5 rounded-lg border" placeholder="Number of guests" type="number"  />
                    <button className=" bg-blue-200 text-white rounded-full">Filter</button>
                </div>
            </div>
        )
    }
}

export default PropertiesForm