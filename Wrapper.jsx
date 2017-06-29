import React, { Component } from "react";
import FlatpickrComponent from "./FlatpickrComponent";

export default class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            show: !this.state.show
        });
    }

    render() {
        return (
            <div>
                {this.state.show ? (<FlatpickrComponent value={new Date()} id="1234" />) : null}
                <button onClick={this.toggle}>Toggle</button>
            </div>
        );
    }
}