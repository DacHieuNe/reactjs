import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class AddComponent extends Component {
    state = {
        add: ""
    }
    handleInputData = (event) => {
        this.setState({
            add: event.target.value
        })
    }
    hanleAddButton = () => {
        if(!this.state.add) {
            toast.error("Missing value");
            return;
        }
        let check = this.props.todoList.some(e => e.title == this.state.add);
        if(check) {
            toast.error("This value is already in todo");
            return;
        }
        toast.success("Add success");
        this.props.renderWhenClickAddButton(this.state.add);
        this.setState({
            add: ""
        })
    }
    render() {
        return (
            <div>
                <input value={this.state.add} type="text" onChange={(event) => this.handleInputData(event)}/>
                <button style={{marginInline: "10px"}} onClick={() => this.hanleAddButton()} >Add</button>
                <ToastContainer
                    position="top-right"
                    autoClose={500}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
        );
    }
}

AddComponent.propTypes = {
    renderWhenClickAddButton: PropTypes.func,
    todoList: PropTypes.array
};

export default AddComponent;