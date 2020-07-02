import React, { Component } from 'react'
import RestAPISample from "./restAPISample"
class RestApi extends Component{
    render(){
        
        return(
            <div className="col-sm-8 container pt-12">
                <h1>Rest API’s & Its Endpoints</h1>
                <p>
                A RESTful API is an application program interface (API) that uses HTTP requests to GET, PUT, POST and DELETE data. REST technology is generally preferred to the more robust Simple Object Access Protocol (SOAP) technology because REST leverages less bandwidth, making it more suitable for internet usage.
                When an API interacts with another system, the touchpoints of this communication are considered endpoints. For APIs, an endpoint can include a URL of a server or service. Each endpoint is the location from which APIs can access the resources they need to carry out their function.
                <p><a href="https://pusher.com/tutorials/consume-restful-api-react ">Click here</a> for more information!</p>
                <p>For code sample <a href="https://codesandbox.io/s/74i1q">Click here>></a></p>
                <p>For sample JSON data <a href="http://jsonplaceholder.typicode.com/users">Click here>></a></p>
                </p>
                <div>
                    <RestAPISample/>
                </div>
            </div>
        );
    }
}
export default RestApi;