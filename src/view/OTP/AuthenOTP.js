import React , { useState } from 'react';
import styled from 'styled-components';
import OtpInput from 'react-otp-input';
import Button from 'react-bootstrap/Button';
import Timer from './Timer';
import PropTypes from 'prop-types';

const StyleOTPInput = styled.div`
    width: fit-content;
    margin: 0 auto;
    .otp-input {
        width: 3rem !important;
        height: 3rem;
        margin: 2rem 1rem;
        font-size: 1.6rem;
        border-radius: 4px;
        border: 1px solid rgba(0, 0, 0, 0.3);
    }
`
const AuthenOTP = ({ setAuthenOTP , handleConfirm , disabled , setResetGenerate , setDisabled , resetGenerate }) => {
   const [otp, setOtp] = useState("");

   const handleChange = (otp) => {
        setOtp(otp);
        setAuthenOTP(otp);
    };
    const handleClear = () => {
        setOtp("");
        setAuthenOTP("");
        setResetGenerate(true);
        setDisabled(false);
    }
    return (
        <StyleOTPInput>
            <Timer disabled={disabled} setDisabled={setDisabled} resetGenerate={resetGenerate} />
            <OtpInput
                value={otp}
                inputStyle={`otp-input`}
                onChange={handleChange}
                numInputs={6}
                separator={<span>-</span>}
            />
            <Button className={!disabled ? "disabled" : ""} variant="primary" style={{marginRight: "20px"}} onClick={() => handleClear()} >Clear</Button>
            <Button className={disabled ? "disabled" : ""} variant="primary" onClick={() => handleConfirm()}>Confirm</Button>
        </StyleOTPInput>
    );
};

AuthenOTP.propTypes = {
    setAuthenOTP: PropTypes.func, 
    handleConfirm: PropTypes.func, 
    disabled: PropTypes.bool, 
    setResetGenerate: PropTypes.func,
    setDisabled: PropTypes.func,
    resetGenerate: PropTypes.bool
};

export default AuthenOTP;