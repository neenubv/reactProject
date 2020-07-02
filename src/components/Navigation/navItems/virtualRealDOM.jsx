import React, { Component } from 'react'
import dom from "../../Assets/dom.png";
import domDifference from "../../Assets/domDifference.png";

class VirtualRealDOM extends Component{
    render(){
        return(
            <div className="col-sm-8 container pt-12">
                <h1>Document Object Model[DOM]</h1>
                <p>
                    DOM is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document. With the Document Object Model, programmers can build documents, navigate their structure, and add, modify, or delete elements and content. The DOM represents the document as nodes and objects. Through this way, the programming languages can connect to the page. The DOM is an object-oriented representation of a web page, which can be modified with a scripting language like JavaScript. Anything found in a HTML document can be accessed, changed, deleted, or added using the Document Object Model.
                </p>
                <p>Following is a short example of how DOM works:</p>
                <center><img src ={dom}className="dom-sample"></img></center>
                <h1>Virtual DOM vs Real DOM</h1>
                <p>
                    Virtual DOM is a node tree (exact copy of real DOM) that lists elements and their attributes and content as objects and properties. If we update something in the state property, parent element gets updated automatically.
                    The render function in React is responsible for creating a node tree from the React components. This tree is then updated in response to the mutations resulting in the data model due to various actions made by the user or the system.
                    <br></br><br></br>
                    <h3>Virtual DOM operates in three simple steps:</h3>
                    <li>Step 1 – The entire UI is re-rendered in Virtual DOM representation as soon as there are some underlying data changes.</li>
                    <li>Step 2 – Now, the difference between the previous DOM representation and the new one (resulted from underlying data changes) is calculated.</li>
                    <li>Step 3 – After the calculations are successfully carried out, the real DOM is updated in line with only the things that actually underwent changes.</li>
                </p>
                <center><img src ={domDifference}className="dom-sample"></img></center>
            </div>
        );
    }
}
export default VirtualRealDOM;