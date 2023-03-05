import React, { Component } from 'react';

class ListComponent extends Component {
    state = {
        isShow: true
    };
    handleShow = () => {
        this.setState({
            isShow: false
        })
    }
    handleHide = () => {
        this.setState({
            isShow: true
        });
    }
    handleRemove = (item) => {
        this.props.removeItem(item);
    }
    render() {
        const { listItem } = this.props;
        return (
            <div>
                {
                    this.state.isShow 
                    ? <button onClick={this.handleShow}>Show</button> 
                    : <>
                        {listItem.map((item) => <li>{item.job} - {item.salary} <span onClick={() => this.handleRemove(item)} style={{color: "#666", cursor: "pointer"}}>x</span></li>)}
                        <button onClick={this.handleHide}>Hide</button>
                      </>
                }
            </div>
        );
      }
}

export default ListComponent;