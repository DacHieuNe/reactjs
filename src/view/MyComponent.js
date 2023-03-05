import React, { Component } from 'react';

class FormElement extends Component {
    state = {
        job: "",
        salary: ""
    }
    handleJob = (event) => {
        this.setState({
            job: event.target.value
        });
    }
    handleSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if(!this.state.job || !this.state.salary) {
            alert("Missing value ! ");
            return;
        }
        this.props.addItem({
            job: this.state.job,
            salary: this.state.salary
        });
        this.setState({
            job: "",
            salary: ""
        })
    }
    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <h3>Job</h3>
                <input onChange={(event) => this.handleJob(event)} type="text" value={this.state.job}/>
                <h3>Salary</h3>
                <input onChange={(event) => this.handleSalary(event)} type="text" value={this.state.salary}/>
                <button style={{display: "block"}} type="submit">Submit</button>
            </form>
        );
    }
}


export default FormElement;