// MyButton.js
import React from 'react';
import { useState } from 'react';

const MyButton = () => {
    const [count, setCount] = useState(0);
    const maxCount = 10;

    function rechner(){
        if(count >= maxCount){
            setCount(count -1);
        }
    }
    function handleClick() {
        //alert('You clicked me');
        setCount(count +1);
        rechner();
    }

    return (
        <button onClick={handleClick}>
            Click Me {count}
        </button>

    );
};

export default MyButton;
