import React, { Component } from 'react';
import ComponentItem from './ComponentItem';

class EditAndDeleteComponent extends Component {
    render() {
        const { list } = this.props;
        return (
            <ul style={{listStyle: "none", margin: 0, padding: 0, marginTop: "20px"}}>
                {list.map((item, index) => (
                    <li key= {index} style={{marginBottom: "8px"}}><ComponentItem changeEditButton={this.props.changeEditButton} changeDeleteButton={this.props.changeDeleteButton} index={index + 1} name={item} /></li>   
                ))}
            </ul>
        );
    }
}

export default EditAndDeleteComponent;
