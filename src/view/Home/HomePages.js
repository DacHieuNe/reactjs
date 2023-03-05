import React , { memo } from 'react';
import PropTypes from 'prop-types';

const HomePages = ({ handleClick }) => {
    return (
        <div>
            <h3>Home Pages</h3>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};

HomePages.propTypes = {
    
};

export default memo(HomePages);