import React , { useState , useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyleTimer = styled.div`
    position: relative;
    max-width: 190px;
    padding-top: 20px;
    border-top: 1px solid #333;
    margin: 0 auto;
    .timer {
            color: #333;
            font-size: 40px;
            font-weight: 600;
            letter-spacing: 3px;
            &-distance {
                display: inline-block;
                margin: 0 12px;
                font-size: 40px;
            }
    }
    .box-timer {
        position: absolute;
        top: 48%;
        left: 19%;
    }
`
const Timer = ({ setDisabled , resetGenerate , disabled }) => {
    const [time,setTime] = useState(62);
    const [check,setCheck] = useState(false);
    const setProgress = (percent) => {
        const circumference = 565.2;
        console.log(percent);
        return circumference - (percent /  100 ) * circumference;
    }
    useEffect(() => {
        if(disabled) {
            setTime(time - 1);
            setCheck(true);
        }
    }, [disabled])
    useEffect(() => {
        let timer;
        if(!disabled && time != 0) {
            timer = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else {
            setDisabled(true);
        }
        return () => {
            if(timer) {
                clearTimeout(timer);
            }
        }
    }, [time])
    useEffect(() => {
        if(resetGenerate) {
            setTime(62);
            setCheck(false);
        }
    }, [resetGenerate]);

    let dashOffset = setProgress((check ? time + 1 : time ) * 100 / 62);
    return (
        <StyleTimer>
            <h6>Countdown:</h6>
            <svg width="200px" height="200px" style={{transform: "rotate(-90deg)"}}>
                <circle cx="100" cy="100" r="90" strokeWidth="10" stroke="lightgray" fill="none"></circle>
                <circle cx="100" cy="100" r="90" strokeWidth="10" stroke="#333" strokeDasharray="565.2" strokeDashoffset={`${dashOffset}`} fill="none"></circle>
            </svg>
            <div className="box-timer">
                <span className="timer">{(check ? time + 1 : time) >= 60 ? "01" : "00"}</span>
                <span class="timer-distance">:</span>
                <span className="timer">{(check ? time + 1 : time) >= 60 ? ((check ? time + 1 : time) - 60 > 9 ? time - 60 : `0${time - 60}`) : ((check ? time + 1 : time) > 9 ? (check ? time + 1 : time) : `0${check ? time + 1 : time}`)}</span>
            </div>
        </StyleTimer>
    );
};

Timer.propTypes = {
    setDisabled: PropTypes.func,
    setResetGenerate: PropTypes.func,
    disabled: PropTypes.bool
};

export default Timer;