import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

export default function Example(props) {
  return (
    <div>
      <div className="shadow-lg p-5 rounded-lg border">
        <DayPickerInput 
          placeholder={props.placeholder}
          onDayChange={day => props.handleChange(day)} 
        />
      </div>
    </div>
  );
}