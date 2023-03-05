import React , { useState , useEffect } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const Test1 = props => {
    const [number, setNumber] = useState(0);
    let timeNow = new Date();
    let secondNow = timeNow.getSeconds();

    useEffect(() => {
        console.log(1);
        setNumber(number + 1);
    }, [secondNow])
    return (
        <div>
            {number}
        </div>
    );
};

Test1.propTypes = {
    
};

export default Test1;