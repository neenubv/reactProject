import React, { Component } from 'react'
import Quiz from 'react-quiz-component';
import { quiz } from './quizData'


class Quizzes extends Component{
    render(){
        return(
            <div className="bg-secondary text-white col-sm-8 container pt-12">
                <Quiz quiz={quiz} shuffle={true}/>
            </div>
        );
    }
}
export default Quizzes;