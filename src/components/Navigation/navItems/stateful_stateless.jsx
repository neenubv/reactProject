import React, { Component } from 'react'
import sflExample from "../../Assets/sflExample.png"

class StatefulStateless extends Component{
    render(){
        return(
            <div className="container pt-3 col-sm-8">
                <h2>Stateless Component</h2>
                <p >Stateless components are simple functional component without having a local state but remember there is a hook in react to add state behavior in functional component as well.</p>
                <h2>Stateful component</h2><p>Stateful component contains the state object and event handling function, user actions as well.</p>
                <h2>Example:</h2>
                <div align="center">
                    <p>
                    <center><img src={sflExample} className = "sfl_example" ></img></center>
                    </p>
                </div>
            </div>
        );
    }
}
export default StatefulStateless;