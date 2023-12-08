import React, {useState} from 'react';

import '../App.css';

export default function MonkeyPoints(props) {
   const [result, setResult] = useState('');

   function sumOfDigits(num) {
      return Math.abs(num)
         .toString()
         .split('')
         .reduce((sum, digit) => sum + parseInt(digit, 10), 0);
   }

   function isAccessible(x, y) {
      const sum = sumOfDigits(x) + sumOfDigits(y);
      return sum <= 19;
   }

   function countAccessiblePoints(limit) {
      let count = 0;

      for (let x = -limit; x <= limit; x++) {
         for (let y = -limit; y <= limit; y++) {
            if (isAccessible(x, y)) {
               count++;
            }
         }
      }

      setResult(count);
   }

   return (
      <div className='monkey-points'>
         <h1>Monkey Points</h1>
         <button
            id='calculate_btn'
            onClick={() => {
               countAccessiblePoints(1000);
            }}
         >
            Calculate
         </button>
         <div className='result-part'>
            <label id='result_label'>{result}</label>
         </div>
      </div>
   );
}
