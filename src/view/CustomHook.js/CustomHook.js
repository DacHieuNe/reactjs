import React , { useState , useEffect } from 'react';
import axios from "axios";
import PostApi, { ourRequest } from '../api/PostApi';
import PropTypes from 'prop-types';

const useFetch = props => {
    const [postList, setPostList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // let isDestroy = true;
    useEffect(() => {
        const ourRequest = axios.CancelToken.source();
        async function fetchData() {
            try {
                let postApi = await PostApi.getAll("", ourRequest);
                if(Array.isArray(postApi) && postApi.length > 0) {
                    setPostList(postApi);
                    setIsLoading(false);
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
        return () => {
            console.log("out");
            ourRequest.cancel();
        }
    }, []);

    return {
        postList,
        isLoading
    }
};

useFetch.propTypes = {
    
};

export default useFetch;