import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ComponentItem extends Component {
    statusEdit = true;
    handleEditButton = (index) => {
        this.props.changeEditButton(index - 1);
    }
    handleDeleteButton = (index) => {
        this.props.changeDeleteButton(index - 1);
    }
    render() {
        return (
            <div>
                <span style={{display: "inline-block", marginRight: "20px"}}>{this.props.index} - {this.props.name}</span>
                <button onClick={() => this.handleEditButton(this.props.index)} style={{marginRight: "8px"}}>Edit</button>
                <button onClick={() => this.handleDeleteButton(this.props.index)} style={{marginRight: "8px"}}>Delete</button>
            </div>
        );
    }
}

ComponentItem.propTypes = {
    index: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    changeDeleteButton: PropTypes.func.isRequired,
    changeEditButton: PropTypes.func.isRequired
};

export default ComponentItem;