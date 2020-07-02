import React, { Component } from 'react'

class LifeCycle extends Component{
    constructor(props) {
        super(props);
        this.state = {
            favoritecolor: "yellow",
            isMounted : false,
        };
      }
      componentDidMount() {
        this.state.isMounted = true;
        setTimeout(() => {
          this.setState({favoritecolor: "red"})
        }, 3000)
        console.log("componentDidMount");
      }
      // static getDerivedStateFromProps(props, state) {
      //   return {favoritecolor: props.favcol };
      // }
      shouldComponentUpdate() {
        return true;
      }
      changeColor = () => {
        this.setState({favoritecolor: "blue"});
      }
    
      componentDidUpdate() {
        document.getElementById("myfav").innerHTML =
        "The updated favorite color  is " + this.state.favoritecolor;
        console.log("componentDidUpdate");
      }
      componentWillUnmount() {
        this.state.isMounted = false;
        console.log("componentWillUnmount");
        alert("The component is about to be unmounted.");
      }
    render(){
        return(
            <div>
                    <div>
                        <h1>Component Lifecycle</h1>
                        <center><img src = "https://www.netguru.com/hubfs/phases.jpg" className="lc_img container pt-3 col-sm-8"></img></center>
                    </div>
                    <div>
                        <p className="col-sm-8 container">
                        <h2>Mounting:</h2> The component is ready to mount in the browser DOM. This phase covers initialization from constructor(), getDerivedStateFromProps(), render(), and componentDidMount() lifecycle methods.
                        <h2>Updating:</h2> In this phase, the component get updated in two ways, sending the new props and updating the state either from setState() or forceUpdate(). This phase covers getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate() and componentDidUpdate() lifecycle methods.
                        <h2>Unmounting:</h2> In this last phase, the component is not needed and get unmounted from the browser DOM. This phase includes componentWillUnmount() lifecycle method.
                        </p>
                    </div>
                    <div className="col-sm-8 container">
                        <h2>Lifecycle Methods</h2>
                        <li><b>componentWillMount </b>is executed before rendering, on both the server and the client side.</li>
                        <li><b>componentDidMount</b> is executed after the first render only on the client side. This is where AJAX requests and DOM or state updates should occur. This method is also used for integration with other JavaScript frameworks and any functions with delayed execution such as setTimeout or setInterval. We are using it to update the state so we can trigger the other lifecycle methods.</li>
                        <li><b>componentWillReceiveProps</b> is invoked as soon as the props are updated before another render is called. We triggered it from setNewNumber when we updated the state.</li>
                        <li><b>shouldComponentUpdate</b> should return true or false value. This will determine if the component will be updated or not. This is set to true by default. If you are sure that the component doesn't need to render after state or props are updated, you can return false value.</li>
                        <li><b>componentWillUpdate</b> is called just before rendering.</li>
                        <li><b>componentDidUpdate </b>is called just after rendering.</li>
                        <li>componentWillUnmount is called after the component is unmounted from the dom. We are unmounting our component in main.js.</li>
                    </div>
                    <div className="col-sm-8 container">
                        <h2>Example</h2>
                        <p>My Favorite Color is {this.state.favoritecolor}</p>
                        <button type="button" onClick={this.changeColor}>Change color</button>
                        <p id="myfav"></p>
                    </div>
            </div>
            
        );
    }
}
export default LifeCycle;