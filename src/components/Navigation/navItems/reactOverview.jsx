import React, { Component } from 'react'

class ReactOverView extends Component{

render(){
    return(
        <div>
            <div className="col-sm-8 container pt-12 m-20">
                <h1>React JS</h1>
                <p>React is a front-end library developed by Facebook. It is used for handling the view layer for web and mobile apps. Reactsjs allows us to create reusable UI components. It is currently one of the most popular JavaScript libraries and has a strong foundation and large community behind it.</p>
                <br></br>
                <h2 align = "center">Limitations</h2>
                <p>
                    <li>React is a JavaScript library for building front-end application or User-Interfaces(UI)</li>
                    <li> It allows us to create a reusable components. Components are the building block of any react-app.</li>
                    <li>It can be little difficult for the novice programmers to understand.</li>
                    <li>Coding gets complex as it uses inline templating and JSX</li>
                </p> 
                <h2 align = "center">Features and Advantages</h2>
                <p>
                    <li>It uses the virtual DOM instead of the real DOM.</li>
                    <li>It uses server-side rendering.</li>
                    <li>It follows Uni-directional data flow or data binding.</li>
                    <li>It increases the application’s performance.</li>
                    <li>It can be conveniently used on the client as well as server side.</li>
                    <li>Because of JSX, code’s readability increases.</li>
                    <li>React is easy to integrate with other frameworks like Meteor, Angular, etc.</li>
                    <li>Using React, writing UI test cases become extremely easy.</li>
                </p>
            </div>      
        </div>    
    );
}

}
export default ReactOverView;