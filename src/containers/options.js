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
            prev: {},
            next: {},
            data: {
                width: 50,
                height: 100,
                bgcolor: '#3104B4',
                bdcolor: '#FFA07A',
                radius: 10
            }
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createTheme(this.state);
    }

    handleChange(e) {
        // let change = {};
        // change[e.target.name] = e.target.value
        // this.state.data[e.target.name] = e.target.value
        // this.setState(this.state);

        let change = {};
        change[e.target.name] = e.target.value
        this.state.data[e.target.name] = e.target.value
        this.setState(this.state)
    }

   render() {
       // var data = this.props.data;
        return(
            <form className="optionsContainer" onSubmit={this.handleSubmit }>
                { /*<input type="text" value={this.state.value.text} onChange={this.handleChange} />*/ }
                <div><label>Width: </label><input placeholder="Width"    onChange={ this.handleChange }   value={this.state.data.width} type="text" name="width" /></div>
                <div><label>Height: </label><input placeholder="Height"  onChange={ this.handleChange }  value={this.state.data.height}   type="text"  name="height"/></div>
                <div><label>Background Color: </label><input placeholder="color" onChange={ this.handleChange }  value={this.state.data.bgcolor}  type="text"  name="bgcolor"/></div>
                <div><label>Border Color: </label><input placeholder="color" onChange={ this.handleChange } value={this.state.data.bdcolor}  type="text"  name="bdcolor"/></div>
                <div><label>Radius: </label><input placeholder="color"  onChange={ this.handleChange } value={this.state.data.radius}  type="text"  name="radius"/></div>
                <input type="submit" value="Submit" />
            </form>
        )
   }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ createTheme }, dispatch);
}

function mapStateToProps(state) {
    return {
        data : state.data
    }
}
export default connect(null, mapDispatchToProps)(Options)

 // export default Options

