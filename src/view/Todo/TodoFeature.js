import React, { Component } from 'react';
import AddComponent from './AddComponent';
import EditAndDeleteComponent from './EditAndDeleteComponent';


class TodoFeature extends Component {
    // [4-1000] => 
    state = {
        list: [
            {
                id: "todo1",
                title: "Doing Homework"
            },
            {
                id: "todo2",
                title: "Watching TV"
            },
            {
                id: "todo3",
                title: "Go eat"
            }
        ]
    }
    renderWhenClickAddButton = (value) => {
        this.setState(currentState => ({
            list: [...currentState.list, {
                id: `todo${Math.floor(Math.random() * 997 + 4)}`,
                title: value
            }]
        }));
    }
    renderWhenClickDeleteButton = (index) => {
        let listTamp = this.state.list.filter((e,i) => i != index);
        this.setState({
            list: listTamp
        });
    }
    renderWhenClickSaveButton = (id, title) => {
        let listTamp = [...this.state.list];
        let posCurrent = listTamp.findIndex(e => e.id == id);
        listTamp[posCurrent].title = title;
        this.setState({
            list: listTamp
        })
    }
    render() {
        let { list } = this.state
        return (
            <div>
                <h3>Simple Todo App By Reactjs</h3>
                <AddComponent todoList={list} renderWhenClickAddButton={this.renderWhenClickAddButton} />
                <EditAndDeleteComponent renderWhenClickSaveButton={this.renderWhenClickSaveButton} renderWhenClickDeleteButton={this.renderWhenClickDeleteButton} todoList={list}/>
            </div>
        );
    }
}


export default TodoFeature;