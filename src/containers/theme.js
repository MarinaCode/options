/**
 * Created by Marina Khanamiryan on 12/7/2017.
 */

import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { defaultOptions } from "../actions/index";


class Theme extends   Component {
    constructor(props) {
        super(props);

        this.defaultOptions = this.defaultOptions.bind(this);
    }

    defaultOptions() {
        this.props.defaultOptions();
    }
    render() {

        var css = '';
        var data = this.props.data;

        let width = data.width + 'px';
        let height =  data.height + 'px';
        let bgcolor = data.bgcolor;
        let bdcolor = '5px solid ' + data.bdcolor;
        let radius = data.radius + 'px';

        css =  `.container { width: ${width}; height:${height}; background-color: ${bgcolor}; border-radius: ${radius}; border: ${bdcolor}`;

        return(
            <div className="themeContainer">
                <style>{css}</style>
                <div className= "container">
                </div>
                <div>
                    <button>prev</button>
                    <button>next</button>
                    <button onClick={ this.defaultOptions }>default</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
         data : state.data.data
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ defaultOptions }, dispatch);
}

export  default connect(mapStateToProps,mapDispatchToProps)(Theme)