import React, { Component } from "react";

export default class Acciones extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cantidad: 0,
        };

        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
    }
    sumar(e) {
        this.setState({
            cantidad: this.state.cantidad + 1,
        })

    }

    restar(e) {
        this.setState({
            cantidad: this.state.cantidad - 1,
        })

    }
    render() {
        return ( <div>
            <button onClick = { this.sumar } > + </button>
            <h3 > { this.state.cantidad } </h3>   
            <button onClick = { this.restar } > - </button>  
            </div>
        );
    }
}