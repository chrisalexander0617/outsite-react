import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

export default function Example(props) {
  return (
    <div>
      <p>Please type a day:</p>
      <div class="shadow-lg p-5 rounded-lg">
        <DayPickerInput 
          onDayChange={day => props.handleChange(day)} 
        />
      </div>
    </div>
  );
}