import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import { FaFacebookF, FaGooglePlusG, FaTwitter, FaLinkedinIn, FaLinkedin } from "react-icons/fa";

const StyleSocial = styled.div`
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
    h3 {
        color: #fff;
    }
    .social {
        &__body {
        position: relative;
        width: 48%;
        margin: 0 auto;
        &-btn {
            position: relative;
            z-index: 2;
            padding: 10px 30px;
            border-radius: 30px;
            border: none;
            color: #333;
            background-color: #fff;
            font-weight: 700;
        }
        a {
            position: absolute;
            display: inline-block;
            width: 44px;
            height: 44px;
            line-height: 44px;
            border-radius: 50%;
            background-color: #fff;
            color: #333;
            text-align: center;
            text-decoration: none;
            font-size: 18px;
            transition: 0.5s;
        }
        &:hover .social__facebook {
            left: 25%;
        }
        &:hover .social__google {
            left: 0%;
        }
        &:hover .social__twitter {
            left: 50%;
        }
        &:hover .social__linked {
            left: 75%;
        }
        &:hover .social__body-btn {
            z-index: -1;
            opacity: 0;
        }
    }
        &__facebook {
            left: 42%;
            top: 0;
        }
        &__google {
            left: 40%;
            top: 0;
        }
        &__twitter {
            top: 0;
            left: 42%;
        }
        &__linked {
            left: 44%;
            top: 0;
        }
    }

`
const Social = props => {
    return (
        <StyleSocial>
            <h3>Social Share Button</h3>
            <div className="social__body">
                <button className="social__body-btn">Share</button>
                <a href="#" className="social__facebook"><FaFacebookF /></a>
                <a href="#" className="social__google"><FaGooglePlusG /></a>
                <a href="#" className="social__twitter"><FaTwitter /></a>
                <a href="#" className="social__linked"><FaLinkedinIn /></a>
            </div>
        </StyleSocial>
    );
};

Social.propTypes = {
    
};

export default Social;