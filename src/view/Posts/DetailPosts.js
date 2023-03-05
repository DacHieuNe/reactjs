import React , { useState , useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useLocation, useParams, useRouteMatch , useHistory } from 'react-router-dom';
import PostApi from '../api/PostApi';

const StylePostList = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
    .post-item {
        max-width: 400px;
        padding: 20px;
        margin: 0 auto;
        border: 1px solid #333;
        img {
            width: 160px;
            height: 160px;
            border-radius: 50%;
        }
        button {
            display: block;
            margin: 10px auto;
            background-color: #928fda;
            border: none;
            outline: none;
        }
    }
`
const DetailPosts = props => {
    const [postItem, setPostItem] = useState({});
    const history = useHistory();
    const params= useParams();
    const { id } = params;
    let isDestroy = true;
    let checkPostItem = Object.keys(postItem).length != 0;
    useEffect(() => {
        async function fetchData() {
            try {
                const postItemFromApi = await PostApi.getId(id);
                if(isDestroy && postItem) {
                    setPostItem(postItemFromApi);
                }
            } catch(error) {
                console.log("error", error);
            }
        }
        fetchData();
        return () => {
            console.log("ComponentWillUnmount");
            isDestroy = false;
        }
    }, [])
    const handleBackButton = () => {
        history.goBack();
    }
    return (
        <StylePostList>
            <h3>Show Details Post Item have {id}</h3>
            <div className="post-item">
                {checkPostItem && <>
                    <h3 className="post-title">Title: {postItem.title}</h3>
                    <h4 className="post-author">Author: {postItem.author}</h4>
                    <p className="post-description">{postItem.description}</p>
                    <img alt="post-thumbnail" src={postItem.imageUrl}></img>
                    <button onClick={handleBackButton}>Back</button>
                </>}
            </div>
        </StylePostList>
    );
};

DetailPosts.propTypes = {
    
};

export default DetailPosts;