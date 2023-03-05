import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class EditAndDeleteComponent extends Component {
    state = {
        edit: {},
        mode: 0
    }
    handleDeleteButton = (index) => {
        this.props.renderWhenClickDeleteButton(index);
    }
    updateStateEdit = (item) => {
        const { edit, mode } = this.state;
        if(mode == 1 && edit.id == item.id) {
            if(!edit.title) {
                toast.error("Don't save because value is empty");
            }else {
                this.props.renderWhenClickSaveButton(edit.id, edit.title);
                this.setState({
                     edit: {},
                     mode: 0
                })
            }
        } else {
            this.setState({
                edit: item,
                mode: 1
            })
        }
    }
    handleInputSave = (event) => {
        let editTamp = {
            ...this.state.edit
        }
        editTamp.title = event.target.value
        this.setState({
            edit: editTamp
        })
    }
    render() {
        let { todoList } = this.props;
        let { edit } = this.state;
        let checkEdit = Object.keys(edit).length == 0;

        return (
            <>
               <ul style={{listStyle: "none", padding: "0"}}>
                  {todoList.map((item,index) => (
                    <li style={{paddingBlock: "10px", borderTop: "1px solid #fff"}} key={item.id}>
                        <span>{
                                edit.id == item.id 
                                   ?  
                                    <>
                                        {index} - <input onChange={(event) => this.handleInputSave(event)} value={edit.title}/> 
                                    </>
                                   :  
                                    <>
                                        {index + 1} - {item.title}
                                    </>
                        }</span>
                        <button onClick={() => this.updateStateEdit(item)} style={{marginInline: "20px"}}>
                            {
                                checkEdit ? 
                                "Edit" 
                                : 
                                edit.id == item.id 
                                ?
                                "Save"
                                :
                                "Edit"
                            }
                        </button>
                        <button onClick={() => this.handleDeleteButton(index)}>Delete</button>
                    </li>
               ))};
                </ul>
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
            </>
        );
    }
}

EditAndDeleteComponent.propTypes = {
    renderWhenClickSaveButton: PropTypes.func,
    renderWhenClickDeleteButto: PropTypes.func,
    todoList: PropTypes.array
}
export default EditAndDeleteComponent;