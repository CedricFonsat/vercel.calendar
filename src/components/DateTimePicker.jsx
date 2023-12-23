import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'tailwindcss/tailwind.css';

const DateTimePicker = ({onChange, value}) => {
 
    return (
      <div className="w-full max-w-xs">
        <DatePicker
          selected={value}
          onChange={onChange}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="MMMM d, yyyy h:mm aa"
          className="w-full text-center p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
    );
  };
  
  export default DateTimePicker;
  