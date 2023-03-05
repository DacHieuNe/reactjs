import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const StyleCard = styled.div`
    max-width: 400px;
    min-height: 200px;
    margin: 100px auto 0;
    padding-top: 20px;
    border: 1px solid #c5a267; 
    outline: #bf9a59 solid 2px;
    outline-offset: 10px;
    color: ${(props) => props?.active ? "#fff" : "#333"};
    text-align: center;
    h1 {
        margin: 0 0 20px;
    }
    span {
        display: block;
    }
    .invite {
        font: 600 20px;
        margin-bottom: 50px;
    }
`
const TestOne = props => {
    return (
        <StyleCard active={props.active}>
            <h1>Thanks you</h1>
            <span className="invite">FOR COMING !</span>
            <span>CLAUDIA & FERNANDES</span>
            <span>10.05.2023</span>
        </StyleCard>
    );
};

TestOne.propTypes = {
    
};

export default TestOne;