/**
 * Created by Marina Khanamiryan  on 12/7/2017.
 */


import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { createTheme } from "../actions/index";

class Options extends  Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            width: 50,
            height: 100,
            bgcolor: '#3104B4',
            bdcolor: '#3104B4',
            radius: 10
        }
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.createTheme(this.state);
    }

    handleChange(e) {
        let change = {};
        change[e.target.name] = e.target.value
        this.setState(change);
    }

   render() {
        return(
            <form className="optionsContainer" onSubmit={this.handleSubmit }>
                <div><label>Width: </label><input placeholder="Width"    onChange={ this.handleChange } name="width"  defaultValue={this.state.width} /></div>
                <div><label>Height: </label><input placeholder="Height"  onChange={ this.handleChange } name="height" defaultValue={this.state.height} /></div>
                <div><label>Background Color: </label><input placeholder="color" onChange={ this.handleChange }  name="bgcolor" defaultValue={this.state.bgcolor} /></div>
                <div><label>Border Color: </label><input placeholder="color" onChange={ this.handleChange } name="bdcolor" defaultValue={this.state.bdcolor}/></div>
                <div><label>Radius: </label><input placeholder="color"  onChange={ this.handleChange } name="radius" defaultValue={this.state.radius} /></div>
                <input type="submit" value="Submit" />
            </form>
        )
   }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ createTheme }, dispatch);
}

export default connect(null, mapDispatchToProps)(Options)

