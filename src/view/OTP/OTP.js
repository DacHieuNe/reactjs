import React , { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import GenerateOTP from './GenerateOTP';
import AuthenOTP from './AuthenOTP';

const StyleOTP = styled.div`
    max-width: 600px;
    padding: 20px;
    margin: 20px auto;
    border: 1px solid ${(props) => props.theme["two-color"]};
    background-color: ${(props) => props.theme["one-color"]};
    text-align: center;
`
const OTP = props => {
    const [generateOTP, setGenerateOTP] = useState("");
    const [authenOTP, setAuthenOTP] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [resetGenerate, setResetGenerate] = useState(false);

    const handleConfirm = () => {
        if(generateOTP && generateOTP == authenOTP) {
            toast.success('Verify OTP Success 🦄', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setDisabled(true);
        } else {
            toast.error('Value Incorrect 🦄', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }
    return (
        <>
        <StyleOTP>
            <h1>Manage OTP</h1>
            <GenerateOTP disabled={disabled} setGenerateOTP={setGenerateOTP} setResetGenerate={setResetGenerate} resetGenerate={resetGenerate}/>
            <AuthenOTP setDisabled={setDisabled} disabled={disabled} handleConfirm={handleConfirm} setAuthenOTP={setAuthenOTP} setResetGenerate={setResetGenerate} resetGenerate={resetGenerate} />
        </StyleOTP>
        <ToastContainer />
        </>
    );
};

OTP.propTypes = {
    
};

export default OTP;