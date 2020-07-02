import React from "react";

class State extends React.Component {
  constructor() {
    super();
    this.state = {
      count:0
    };  
  }
    increment = () =>  {
    this.setState({ count: this.state.count + 1});

  }
  decrement=() => {
    this.setState({count : this.state.count - 1});
  }
  render() {
    return (  
      <div>
          <div className="container pt-3 col-sm-8">
            <h1>State</h1>
            <p>State is the place where the data comes from. We should always try to make our state as simple as possible and minimize the number of stateful components</p>
            <h2>setState()</h2>
            <p>setState() method is used to update the state of the component. This method will not replace the state, but only add changes to the original state.</p>
            <h2>Example:</h2>
          </div>
            <div align = "center">
                <button onClick={this.increment}>+</button>
                <h1>{this.state.count}</h1>
                <button onClick={this.decrement}>-</button>
          </div>
        </div>
    );
  }
}
export default State;
