import React, { Component } from "react";
import Flatpickr from "flatpickr";

export default class FlatpickrComponent extends Component {

		constructor(props) {
        super(props);
        this.state = {
            "id": this.props.id
        };
    }

    componentDidMount() {
        const config = Object.assign(
            Object.create(null),
            {
                "defaultDate": this.props.value,
                "altInput": true,
                "time_24hr": true
            },
            this.props
        );

        const { id } = this.state;
        this.flatpickr = Flatpickr(document.getElementById(id), config);
        this.flatpickr.open();
    }

    shouldComponentUpdate(nextProps) {
        const currentValue = this.props.value;
        const nextValue = nextProps.value;

        let shouldUpdate = (currentValue !== nextValue);

        if (currentValue && nextValue) {
            shouldUpdate = currentValue.valueOf() !== nextValue.valueOf();
        }

        return shouldUpdate;
    }

    componentWillUpdate(nextProps) {
        if (nextProps.value) {
            this.flatpickr.setDate(nextProps.value);
        }
    }

    componentWillUnmount() {
        this.flatpickr.destroy();
    }

    render() {
        const { id } = this.state;
        return <input id={id} />;
    }
}