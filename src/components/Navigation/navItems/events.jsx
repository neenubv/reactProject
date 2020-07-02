import React, { Component } from 'react'
class Events extends Component{
    constructor(){
        super();
        this.state = {
            text : 
            `
            <form onSubmit={this.handleSubmit}>
                <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>`
        }
    }
    render()
    {
        return(
            <div className="col-sm-8 container pt-12">
                <h1>Events</h1>
                <p>          
                <li><b>onsubmit() </b>event is an event that occurs when you try to submit a form. ... Here we are calling a validate() function before submitting a form data to the web server. If validate() function returns true, the form will be submitted, otherwise, it'll not submit the data.</li>
                <li><b>onClick()</b> is an event that declares when something, anything, is clicked.</li>
                <li><b>onChange()</b> is an event that declares when an input is changed</li> 
                </p>
                <h2>Example:</h2>
                <p>
                    <pre className="code-sample">
                        <code>
                            {this.state.text}
                        </code>
                    </pre>
                </p>
                <p>(NB: This is better demonstrated in the 'Forms' example)</p>
            </div>
        );

    }
}
export default Events;