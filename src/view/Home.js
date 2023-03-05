import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class Home extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.history.push("/todo");
        }, 3000)
    }
    render() {
        return (
            <div>
                <h3>Home Pages</h3>
            </div>
        );
    }
}
// withRouter : higher order component
export default withRouter(Home);