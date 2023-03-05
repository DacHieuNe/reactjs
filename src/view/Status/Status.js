import React , { useState , useEffect } from 'react';
import { Redirect, useHistory , useLocation } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { deleteAction } from '../store/action/DeletePost';
import { editAction } from '../store/action/EditPost';
import queryString from 'query-string';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

const StyleStatus = styled.div`
    max-width: 1000px;
    margin: 20px auto;
    text-align: center;
    .status {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;
    }
    .in-stock {
        color: green;
    }
    .out-of-stock {
        color: red;
    }
`
const Status = props => {
    const data = useSelector(state => state.status); 
    const dispatch = useDispatch();
    let location = useLocation();
    let history = useHistory();
    let isRedirect = false;
    const [foodList, setFoodList] = useState([]);
    const [editData, setEditData] = useState({}); 
    const [saveCount, setSaveCount] = useState(data);

    console.log("data", data);
    let isEdit = Object.keys(editData).length == 0;
    const handleShowAll = () => {
        history.push("/status?status=all");
        setSaveCount(data);
    }
    const handleInStock = () => {
        history.push({
            pathname: "/status",
            search: "status=in_stock"
        });
        let dataCheck = data.filter(e => e.status == "IN STOCK");
        setSaveCount(dataCheck);
    }
    const handleOutOfStock = () => {
        history.push({
            pathname: "/status",
            search: "status=out_of_stock"
        });
        let dataCheck = data.filter(e => e.status == "OUT OF STOCK");
        setSaveCount(dataCheck);
    }
    const resetURL = () => {
        let checkURL = Object.keys(queryString.parse(location.search));
        if(checkURL.length != 1 || checkURL[0] != "status") {
            history.push("/status?status=all");
            return;
        }
        let checkValueURL = queryString.parse(location.search);
        if(!checkValueURL.status || (checkValueURL.status.toLowerCase() != "all" && checkValueURL.status.toLowerCase() != "in_stock" && checkValueURL.status.toLowerCase() != "out_of_stock" )) {
            history.push("/status?status=all"); // khi đẩy vào thì nó re-render thêm 1 lần nữa như <Link>
            return;
        }
    }
    const handleFilterProduct = () => {
        const stateStatus = queryString.parse(location.search).status?.toLowerCase();
        // data là mảng các object
        if(stateStatus) {
            if(stateStatus == "all") {
                setFoodList(data);
            } else if (stateStatus == "in_stock") {
                const dataTamp = data.filter(e => e.status == "IN STOCK");
                setFoodList(dataTamp);
            } else if (stateStatus == "out_of_stock") {
                const dataTamp = data.filter(e => e.status == "OUT OF STOCK");
                setFoodList(dataTamp);
            }
        }
    }
    const handleRedirectButton = () => {
        history.push("/form");
    }
    const handleDeleteButton = (id) => {
        const action = deleteAction(id);
        dispatch(action);
    }
    const handleEditButton = (item, index) => {
        if(Object.keys(editData).length != 0 && editData.id == item.id){
            console.log("foodList", foodList);
            const value = foodList[index].title;
            const action = editAction(index, value);
            dispatch(action);
        } else {
            setEditData(item);
        }
    }
    const handleChangeInputEdit = (event,index) => {
        const foodListFake = [...foodList];
        foodListFake[index].title = event.target.value;
        setFoodList(foodListFake);
    }
    useEffect(() => {
        let status = queryString.parse(location.search).status;
        let dataCheck = data;
        if(status == "in_stock") {
            dataCheck = dataCheck.filter(e => e.status == "IN STOCK");
        } else if (status == "out_of_stock") {
            dataCheck = dataCheck.filter(e => e.status == "OUT OF STOCK");
        }
        setFoodList(dataCheck);
        if(Object.keys(editData).length != 0 && saveCount.length == dataCheck.length){
            setEditData({});
        } else {
            setSaveCount(dataCheck);
        }
    }, [data]);
    useEffect(() => {
        if(!isRedirect) {
            handleFilterProduct();
            resetURL();
        };
        return () => {
            isRedirect = true;
        }
    }, [location.search])
    // const filterURL = () => {
    //     let checkValueStatus = queryString.parse(location.search);
    //     if(checkValueStatus.status?.toLowerCase() == "all") {
    //         return data;
    //     } else if (checkValueStatus.status?.toLowerCase() == "in_stock") {
    //         return data.filter(e => e.status == "IN STOCK");
    //     } else if (checkValueStatus.status?.toLowerCase() == "out_of_stock") {
    //         return data.filter(e => e.status == "OUT OF STOCK");
    //     }
    //     return [];
    // }
    // const foodList = filterURL();
    return (
        <StyleStatus>
            {console.log(foodList)}
            <h4>TODO WITH REDUX</h4>
            <Button className="my-3" variant="primary" onClick={() => handleRedirectButton()}>Add new food +</Button>{' '}
                <div style={{marginBottom: "20px"}}>
                    <button onClick={handleShowAll} type="button" className="btn btn-outline-primary" >Show ALL</button>
                 <div style={{display: "inline-block", marginInline: "20px"}}>
                    <button onClick={handleInStock} type="button" className="btn btn-outline-success" >Show IN STOCK</button>
                </div>
                    <button onClick={handleOutOfStock} type="button" className="btn btn-outline-danger" >Show OUT OF STOCK</button>
                </div>
            <div className="status">
            {Array.isArray(foodList) && foodList.length > 0 && foodList.map((e,i) => (
                <Card key={e.id}>
                    <Card.Img variant="top" src={e.avatar} alt="image-thumbnail" />
                    <Card.Body>
                        {isEdit ? <Card.Title>{e.title}</Card.Title> : editData.id == e.id ? <Form.Control value={e.title} onChange={(event) => handleChangeInputEdit(event,i)} /> : <Card.Title>{e.title}</Card.Title>}
                        <Card.Text>
                        {e.price}
                        </Card.Text>
                        <Card.Text>
                        Status: <span className={e.status == "IN STOCK" ? "in-stock" : "out-of-stock"}>{e.status}</span>
                        </Card.Text>
                        <Button className="my-3 mx-3" variant="primary" onClick={() => handleEditButton(e,i)}>{isEdit ? "Edit" : editData.id == e.id ? "Save" : "Edit"} Name</Button>
                        <Button className="my-3" variant="primary" onClick={() => handleDeleteButton(e.id)}>Delete Post</Button>
                    </Card.Body>
                </Card>
            ))}
            </div>
        </StyleStatus>
    );
};

Status.propTypes = {
    
};

export default Status;