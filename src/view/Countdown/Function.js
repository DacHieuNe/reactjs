import React , { useState , useEffect } from 'react';
import PropTypes from 'prop-types';

const Function = props => {
    const [count,setCount] = useState(10);
    let time = null;
    useEffect(() => {
        if(count == 0) {
            alert("time up");
            return;
        }
        time = setInterval(() => {
            setCount(count - 1);
        }, 1000);
        return () => {
            clearTimeout(time);
        }
    })
    return (
        <div>
            <h2>Countdown with Function Component</h2>
            Count: {count}
        </div>
    );
};

Function.propTypes = {
    
};

export default Function;