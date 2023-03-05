import React from 'react';
import Moment from 'react-moment'
import { useEffect , useState } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import covidApi from '../api/covidApi';
import moment from 'moment';
import useFetch from './fetch';

const TableReact = props => {
    const { covidList, loading , isError} = useFetch();
    return (
        <>
        {console.log(1)}
        <h2 className="title">Hello From Table</h2>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Date</th>
          <th>Confirmed</th>
          <th>Deaths</th>
          <th>Active</th>
        </tr>
      </thead>
      <tbody>
        {!isError && !loading && Array.isArray(covidList) && covidList.length > 0 && covidList.map(item => (
            <tr key={item.ID}>
                <td>{item.Date}</td>
                <td>{item.Confirmed}</td>
                <td>{item.Deaths}</td>
                <td>{item.Active}</td>
            </tr>
        ))}
        {loading && <>
            <tr>
                <td colSpan="4" style={{textAlign: "center"}}>Loading...</td>
            </tr>
        </>}
        {isError && <>
            <tr>
                <td colSpan="4" style={{textAlign: "center"}}>Something Error...</td>
            </tr>
        </>}
      </tbody>
    </Table>
        </>
    );
};

TableReact.propTypes = {
    
};

export default TableReact;