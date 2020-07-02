import React, { Component } from 'react'
import propsExample from "../../Assets/propsExample.png";

class Props extends Component{
    render(){
        return(
            <div>
                <h1>Props</h1>
                <p className = "col-sm-8 container pt-12">
                'Props' is a special keyword in React, which stands for properties and is being used for passing data from one component to another. But the important part here is that data with props are being passed in a uni-directional flow. ( one way from parent to child)
                <h2>Example:</h2>
                </p>
                <div align = "center">
                    <img src = {propsExample} className = "prop_example" ></img>
                </div>
            </div>
        );
    }
}
export default Props;