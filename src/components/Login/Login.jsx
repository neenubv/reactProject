import React, { Component } from 'react';
class Login extends Component{
    constructor(props) {
        super(props)
        this.state = {
            username:"",
            password : "",
            userCredentials : [
               {
                   'username': 'abc@gmail.com',
                   'password': '6789',
               },
               {
                   'username': 'xyz@gmail.com',
                   'password': '4567',
               }
           ]
        };
        
    }
    handleOnclick = () => {
        let isValidUser = false;
       
       this.state.userCredentials.forEach( credential => {
           if (this.state.username === credential.username && this.state.password === credential.password)
           {
               isValidUser = true;
               this.props.history.push('/reactJS');
           }
       }) 
       if (!isValidUser){
           alert("Invalid User Credentials")
       }
       
    }

    handleUserNameChange = (e) => {
       this.setState ({ username : e.target.value})

    }
    handlePasswordChange = (e) => {
       this.setState ({ password : e.target.value})

    }
    handleSubmit = (e) =>{
        e.preventDefault()
        this.setState({
            username:"",
            password:""
        });
    
        alert("Login successfull")
    }
    render(){
        return(
            <div className="container">
            <h2 align= "center">Log In</h2>
            <form action="/action_page.php" onSubmit={this.handleSubmit} className="login-form">
                <div className="form-group">
                <label for="email">Username:</label>
                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" required  onChange = {this.handleUserNameChange} />
                </div>
                <div className="form-group">
                <label for="pwd">Password:</label>
                <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd" required onChange = {this.handlePasswordChange}/>
                </div>
                <div className="checkbox">
                <label><input type="checkbox" name="remember"/> Remember me</label>
                </div>
                <button className="btn btn-primary text-white logBtn" onClick={this.handleOnclick}>Log in</button>      
            </form>
        </div>
        );
    }
}
export default Login;