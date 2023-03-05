import React, { Component } from 'react';

class AddComponent extends Component {
    render() {
        return (
            <div>
                <input onChange={(event) => this.props.handleInputData(event)} type="text" value={this.props.add}/>
                <button onClick={(event) => this.props.handleAddButton(event)} className="btn-add">Add</button>
            </div>
        );
    }
}

export default AddComponent;