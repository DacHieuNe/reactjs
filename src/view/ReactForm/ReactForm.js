import React , { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Feedback from 'react-bootstrap/Feedback'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useForm  } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { AddAction } from '../store/action/AddNewPost';
import PropTypes from 'prop-types';

const ReactForm = props => {
  // const [validated, setValidated] = useState(false);K
    const dispatch = useDispatch();
    const history = useHistory();
    const schema = yup.object().shape({
          title: yup.string().required("Vui lòng nhập tiêu đề cần thêm").min(4, "Title ít nhất có 4 kí tự"),
          price: yup.string().required("Vui lòng nhập giá cần thêm").test("test string", "Price không được phép là số âm", (value) => !value.includes("-")),
          status: yup.string().required("Vui lòng chọn trạng thái")
    });
    let { handleSubmit , control, formState: {errors} } = useForm({
        defaultValues: {
            title: "",
            price: "",
            status: ""
        },
        mode: "onChange",
        resolver: yupResolver(schema)
    })
    const handleDataSubmit = (data) => {
        const action = AddAction(data);
        dispatch(action);
        toast.success('Add New Success 🦄', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
      });
        setTimeout(() => {
            history.push("/status?status=all");
        }, 1500)
    }
    return (
      <>
        <Form noValidate onSubmit={handleSubmit(handleDataSubmit)} style={{maxWidth: "500px",margin: "20px auto", padding: "20px", border: "1px solid #666"}}>
        <h2>Add New Posts</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Name</Form.Label>
            <Controller
                control={control}
                name="title"
                render={({ field: { onChange, onBlur, value, ref } }) => (                             
                <Form.Control onChange={onChange} value={value} ref={ref}                            
                isInvalid={errors.title}                                                          
                placeholder="Name" />)}
            />
      {errors.title &&  <Form.Control.Feedback type="invalid">{errors.title.message}</Form.Control.Feedback>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Controller
                control={control}
                name="price"
                render={({ field: { onChange, onBlur, value, ref } }) => (                             
                <Form.Control onChange={onChange} value={value} ref={ref}                            
                isInvalid={errors.price}
                type="text"                                                          
                placeholder="Price" />)}
        />
      {errors.price &&  <Form.Control.Feedback type="invalid">{errors.price.message}</Form.Control.Feedback>}
      </Form.Group>
      <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label>
            Status
          </Form.Label>
          <Col sm={10}>
          <Controller
          control={control}
          name="status"
          defaultValue={props.value}
          render={({ field: { onChange, onBlur, value, ref } }) => (
          <>
            <Form.Check
              onChange={onChange}
              value="IN STOCK"
              type="radio"
              name="formHorizontalRadios"
              label="In Stock"
              isInvalid={errors.status}
              id="formHorizontalRadios1"
            />
            <Form.Check
              onChange={onChange}
              value="OUT OF STOCK"
              type="radio"
              name="formHorizontalRadios"
              label="Out Of Stock"
              isInvalid={errors.status}
              id="formHorizontalRadios2"
            />
            {errors.status &&  <Form.Control.Feedback className="d-block" type="invalid">{errors.status.message}</Form.Control.Feedback>}
          </>
        )}
            />         
          </Col>
        </Form.Group>
      </fieldset>

      <Button variant="primary" type="submit">
        Submit
      </Button>
        </Form>
        <ToastContainer />
      </>  
    );
};

ReactForm.propTypes = {
    
};

export default ReactForm;