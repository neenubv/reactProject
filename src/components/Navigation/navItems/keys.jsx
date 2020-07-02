import React, { Component } from 'react'


class Keys extends Component{
    constructor(){
        super();
        this.state = {
            text: `class App extends React.Component {
                constructor() {
                   super();  
                   this.state = {
                      data:[
                         {
                            component: 'First...',
                            id: 1
                         },
                         {
                            component: 'Second...',
                            id: 2
                         },
                         {
                            component: 'Third...',
                            id: 3
                         }
                      ]} }
                render() {
                   return (
                      <div>
                         <div>
                            {this.state.data.map((comp, index) => <Content 
                               key = {index} componentData = {comp}/>)}
                         </div>
                      </div>
                   );}}`
        };
    }
    render(){
        return(
            <div className="container pt-3 col-sm-8">
                <h1>Keys</h1>
                <p>A “key” is a special string attribute you need to include when creating arrays of elements. Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside an array to give the elements a stable identity.
                Keys only need to be unique among sibling elements in the same array. They don’t need to be unique across the whole application or even a single component.
                </p>
                <h2>Example:</h2>
                <pre className="code-sample">
                    <code>
                        {this.state.text}
                    </code>
                </pre>
                <div align="center">
                  <h3>Output:</h3>
                  <p>First...</p>
                  <p>1</p>
                  <p>Second...</p>
                  <p>1</p>
                  <p>Third...</p>
                  <p>1</p>
                </div>
            </div>
        );

    }
}
export default Keys;