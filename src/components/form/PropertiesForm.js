import React, {Component} from 'react';
import DatePickerInput from './inputs/DatePickerInput';
import 'react-day-picker/lib/style.css';

class PropertiesForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            arrivalDate:null,
            departureDate:null
        }
        this.changeDepartureDate = this.changeDepartureDate.bind(this);
        this.changeArrivalDate = this.changeArrivalDate.bind(this);

    }

    changeDepartureDate(selectedDay, modifiers, dayPickerInput){
        console.log(selectedDay, modifiers, dayPickerInput )
    }

    changeArrivalDate(selectedDay, modifiers, dayPickerInput){
        console.log( selectedDay, modifiers, dayPickerInput )
    }

    render(){
        //const { selectedDay, isDisabled, isEmpty } = this.state;
        return ( 
            <>
                {
                    this.state.departureDate && <div>itshere</div>
                }
                <DatePickerInput handleChange={this.changeDepartureDate} />
                {
                    this.state.arrivalDate && <div>its here</div>
                }
                <DatePickerInput  handleChange={this.changeArrivalDate} />
            </>
        )
    }
}

export default PropertiesForm