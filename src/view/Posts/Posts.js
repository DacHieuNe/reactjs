import React , { useState , useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PostItem from './PostItem';
import useFetch from '../CustomHook.js/CustomHook';
const StylePosts = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
    .post {
        display: flex;
        flex-wrap: wrap;
        &-item {
            width: calc(100% / 3);
        }
    }
`
const Posts = props => {
    const { postList , isLoading } = useFetch();
    return (
        <StylePosts>
            <h2>Posts list</h2>
            <h3>{isLoading && "Loading data ... Please wait for minutes"}</h3>
            <div className="post">
                 {!isLoading && Array.isArray(postList) && postList.length > 0 && postList.map((item,index) => (
                    <PostItem key={item.id} id={item.id} className="post-item" title={item.title} desc={item.desc} imageUrl={item.imageUrl}/>
                ))}      
            </div>  
        </StylePosts>
    );
};

Posts.propTypes = {
    
};

export default Posts;