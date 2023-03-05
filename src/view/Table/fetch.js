import React , { useState , useEffect } from 'react';
import covidApi from '../api/covidApi';
import moment from "moment";
import PropTypes from 'prop-types';

const useFetch = props => {
    const [covidList, setCovidList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    console.log(0);
    useEffect(() => {
        async function fetchData() {
            console.log(2);
            try {
                // {
                //     from: "2023-02-01T00:00:00Z",
                //     to: "2023-02-20T00:00:00Z"
                // }
                let dataFromApi = await covidApi.getAll();
                if(dataFromApi && dataFromApi.data) {
                    let data = dataFromApi.data;
                    data.forEach(item => {
                        item.Date = moment(item.Date).format("DD/MM/YYYY");
                    });
                    setCovidList(data);
                    console.log(3);
                    setLoading(false);
                } else {
                    throw new Error("Response error");
                }
            } catch (error) {
                setLoading(false);
                setIsError(true);
            }
        }
        fetchData();
    }, [])
    return {
        covidList,
        loading,
        isError
    }
};


export default useFetch;