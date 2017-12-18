/**
 * Created by Marina Khanamiryan on 12/7/2017.
 */

import React, { Component } from 'react';
import { connect } from "react-redux";

class Theme extends   Component {
    constructor(props) {
        super(props);
    }
    render() {
        var css = '';
        var data = this.props.data;
        var width = 50+'px';
        var height = 100+'px';
        var bgcolor = '#3104B4';
        var bdcolor = '#3104B4';
        var radius = '10px';

        if(data != null)  {
            width = data.width + 'px';
            height =  data.height + 'px';
            bgcolor = data.bgcolor;
            bdcolor = '1px solid ' + data.bdcolor;
            radius = data.radius + 'px';

        }

        css =  `.container { width: ${width}; height:${height}; background-color: ${bgcolor}; border-radius: ${radius}; border: ${bdcolor}`;
        console.log(this.props.data);
        return(
            <div className="themeContainer">
                <style>{css}</style>
                <div className= "container">
                </div>
                <div>
                    <button>prev</button>
                    <button>next</button>
                    <button>default</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
         data : state.data
    }
}

export  default connect(mapStateToProps)(Theme)