import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import InputField from './Field/InputField';

const StyledInput = styled.input`
    width: 100%;
    margin-bottom: 12px;
`
const StyledError = styled.span`
    color: red;
`
const Form = props => {
    const { register , handleSubmit, formState: { errors }} = useForm({
        criteriaMode: "all",
        defaultValues: {
            firstName: "",
            lastName: ""
        }
    });
    const handleSubmitForm = (data) => {
        // console.log("data", data);
    }
    return (
        <form onSubmit={handleSubmit(handleSubmitForm)}>
            <div>
                Username: <StyledInput type="text" {...register("firstName", {
                    required: true,
                    minLength: 3,
                    maxLength: 25
                })}/>
                {!errors.firstName && ""}
                {errors.firstName && errors.firstName.type == "required" && <StyledError>Username phải có giá trị</StyledError>}
                {errors.firstName && errors.firstName.type == "maxLength" && <StyledError>Username chỉ được có 3 - 25 kí tự</StyledError>}
                {errors.firstName && errors.firstName.type == "minLength" && <StyledError>Username chỉ được có 3 - 25 kí tự</StyledError>}
            </div>
            <div>
                Email: <StyledInput type="email" {...register("email", {
                    required: true,
                    pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9]+(.[a-zA-Z]{2,5}){1,2}/
                })}/>
                {!errors.email && ""}
                {errors.email && errors.email.type == "required" && <StyledError>Email phải có giá trị</StyledError>}
                {errors.email && errors.email.type == "pattern" && <StyledError>Email phải đúng định dạng</StyledError>}
            </div>
            <div>
            Password: <StyledInput type="password" {...register("password", {
                required: true,
                pattern: /^[A-Z]{1}[a-zA-Z0-9_\-+]{3,}$/
            })}/>
            {console.log(errors.password)}
            {!errors.password && ""}
            {errors.password && errors.password.type == "required" && <StyledError>Password phải có giá trị</StyledError>}
            {errors.password && errors.password.type == "pattern" && <StyledError>Password phải có ít nhất 4 kí tự , kí tự đầu tiên phải viết hoa , những kí tự tiếp theo chỉ được là chữ cái , số , kí tự đặc biệt cho phép: -_+</StyledError>}
            </div>
            <div>
            Confirm Password: <StyledInput type="password" {...register("confirmPassword", {
                required: true
            })}/>
            </div>
            <div style={{textAlign: "center"}}>
                <button type="submit">Register</button>
            </div>
        </form>
    );
};

Form.propTypes = {
    
};

export default Form;