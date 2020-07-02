import React, { Component } from 'react';
import fluxExample from "../../Assets/fluxExample.png"
class FluxRedux extends Component{
    render(){
        return(
            <div className="col-sm-8 container pt-12" >
                <h1>Flux</h1>
                <p>FLUX is architecture and is more suitable as an application architecture for building user interface. Flux is a pattern for managing how data flows through a React application. As we've seen, the preferred method of working with React components is through passing data from one parent component to it's children component.</p>
                <center><img src = {fluxExample}  className="flux-example" align="center"></img></center>
                <p>
                <h3>Flux Elements</h3>
                <li>Actions − Actions are sent to the dispatcher to trigger the data flow.</li>
                <li>Dispatcher − This is a central hub of the app. All the data is dispatched and sent to the stores.</li>
                <li>Store − Store is the place where the application state and logic are held. Every store is maintaining a particular state and it will update when needed.</li>
                <li>View − The view will receive data from the store and re-render the app</li>
                </p>
                <h1>Redux</h1>
                <p>Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces.</p>
                <p>The primary difference of Flux vs Redux is that Flux includes multiple Stores per app, but Redux includes a single Store per app. Rather than placing state information in multiple Stores across the application, Redux keeps everything in one region of the app.
                </p>
                <p><a href="https://medium.com/@dakota.lillie/flux-vs-redux-a-comparison-bbd5000d5111">Click here</a> for more information!</p>
            </div>
        );
    }
}
export default FluxRedux;