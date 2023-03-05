import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Class extends Component {
    state = {
        count: 10
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                count: this.state.count - 1
            })
        }, 1000);
    }
    componentDidUpdate() {
        if(this.state.count != 0) {
            setTimeout(() => {
                this.setState({
                    count: this.state.count - 1
                })
            }, 1000);
        } else {
            alert("Time up");
            // setTimeout(() => {
            //     alert("Time up");
            // }, 1000);
        }
    }
    render() {
        const { count } = this.state;
        return (
            <div>
                <h3>Countdown with Class Component</h3>
                Count: {count}
            </div>
        );
    }
}

Class.propTypes = {

};

export default Class;