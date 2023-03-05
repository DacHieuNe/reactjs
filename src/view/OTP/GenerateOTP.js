import React , { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyleGenerate = styled.div`
    margin-top: 20px;
    h6 {
        margin-top: 20px;
    }
    span {
        color: green;
        font-size: 20px;
        letter-spacing: 2px;
    }
`
const GenerateOTP = ({ setGenerateOTP , setResetGenerate , resetGenerate , disabled }) => {
    const [generate, setGenerate] = useState("");
    const handleGenerateOTP = () => {

            const number = Math.trunc(Math.random() * 900000 + 100000);
            setGenerate(number);
            setGenerateOTP(number);
    }
    useEffect(() => {
        if(resetGenerate) {
            setGenerate("");
            setGenerateOTP("");
            setResetGenerate(false);
        }
    }, [resetGenerate])
    return ( 
        <StyleGenerate>
            <Button className={disabled ? "disabled" : ""} variant="primary" onClick={handleGenerateOTP}>Generate OTP</Button>
            <h6>Your OTP Generate : <span>{generate}</span></h6>
        </StyleGenerate>
    );
};

GenerateOTP.propTypes = {
    setGenerateOTP: PropTypes.func, 
    setResetGenerate: PropTypes.func, 
    resetGenerate: PropTypes.bool
};

export default GenerateOTP;