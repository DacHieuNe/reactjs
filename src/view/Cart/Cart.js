import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const StyleCart = styled.div`
    max-width: 300px;
    box-shadow: 0 0 20px rgb(0 255 255 / 30%);
    background-color: ${(props) => props.active ? "#31a9cc" : "transparent"};
    font-family: 'Courier New', Courier, monospace;
`;

const StyleImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const StyleCartBody = styled.div`
    padding-inline: 15px;
    color: ${(props) => props.active ? "#fff" : "#333"};
    text-align: center;
`
const StyleCartBodyWrap = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
`;
const StyleCartBodyPrice = styled.h2`
    margin: 0;
`
const StyleCartButton = styled.button`
    padding: 10px 30px;
    border: 1px solid yellow;
    border-radius: 30px;
    margin-bottom: 20px;
    color: ${(props) => props.active ? "#fff" : "yellow"};
    background-color: ${(props) => props.active ? "yellow" : "transparent"};
    cursor: pointer;
`
const Cart = (props) => {
    return (
        <StyleCart active={props.active}>
            <div className="cart-thumbnail">
                <StyleImg src="https://media.istockphoto.com/id/1177415728/photo/mens-black-blank-hoodie-template-from-two-sides-natural-shape-on-invisible-mannequin-for-your.jpg?s=170667a&w=0&k=20&c=-CTRSwEA-0hd5zG5GYrsI6HB7F8dB97dD962KcYcbjg=" alt="cart-thumbnail" />
            </div>
            <StyleCartBody active={props.active}>
                <h2 className="cart__body-title">Man Hoodie</h2>
                <p className="cart__body-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <StyleCartBodyWrap>
                    <div className="cart__body-size">
                        <span>S&nbsp;</span>
                        <span>M&nbsp;</span>
                        <span>L&nbsp;</span>
                        <span>XL</span>
                    </div>
                    <div className="cart__body-price">
                        <StyleCartBodyPrice>$ 17.99</StyleCartBodyPrice>
                    </div>
                </StyleCartBodyWrap>
                <StyleCartButton active={props.active}>Add To Cart</StyleCartButton>
            </StyleCartBody>
        </StyleCart>
    );
};

Cart.propTypes = {
    
};

export default Cart;