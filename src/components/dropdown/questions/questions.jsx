import React, { Component } from 'react'
import Qns from "./questions.json"
 
class Questions extends Component{

    render(){
        return(
            Qns.map((data) => {
                    return (
                            <div className="container pt-3 col-sm-8">
                                <h1>{data.Q}</h1>
                                <p>{data.Ans}</p>
                            </div>
                    );
                })
        );
    }

}

export default Questions;

