import React, {Component} from 'react';
import '../../style.css'

 class Form extends Component {
     constructor(props) {
         super(props)
         this.state = {
             firstName : "",
             lastName : "",
             email: "",
             password : "",
             gender : "",
         };
     }
     componentWillMount() 
     { 
         console.log("componentWillMount()"); 
     } 
   
     componentDidMount() 
     { 
         console.log("componentDidMount()"); 
     } 
    handleFirst = (e) => {
        this.setState ({firstName : e.target.value})
   
    }
    handleLast = (e) => {
       this.setState ({lastName : e.target.value})
   
   }
   handleEmail = (email) => {
    this.setState({email}, this.validateEmail)
  }

  validateEmail = () => {
    const {email} = this.state;
    let emailValid = true;
    let errorMsg = {...this.state.errorMsg}

    // checks for format _@_._
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      emailValid = false;
      errorMsg.email = 'Invalid email format'
    }
   
   }
   handlePassword = (e) => {
       this.setState ({password : e.target.value})
   
   }
   handleGender = (e) => {
       this.setState ({gender : e.target.value})
   
   }
   onCheckchange = (e) => {
       console.log(e.target.checked);
       this.setState({[e.target.name] : e.target.checked})
   }
   handleSubmit = (e) =>{
       e.preventDefault()
       this.setState({
           firstName: "",
           lastName: "",
           email: "",  emailValid: false,
           password: '',
           gender: "",
       });
   
       alert(`${this.state.firstName} ${this.state.lastName} registered successfully`)
   }

   render() {
    return(
        <div> 
            <div className = "container pt-3 text-white">
                <h1>React JS - Forms</h1>
                <p>In React, form data is usually handled by the components. When the data is handled by the components, all the data is stored in the component state .
                Handling forms is about how you handle the data when it changes value or gets submitted. In HTML, form data is usually handled by the DOM. In React, form data is usually handled by the components. When the data is handled by the components, all the data is stored in the components State.
                You can control changes by adding event handlers in the onChange attribute.
                </p>
                <br></br>
                <h2>Example:</h2>
            </div>
            <div align= "center" className="Container" >
                <form onSubmit= {this.handleSubmit}>
                    <h3>User Registration Form</h3>
                    <label>First Name<span aria-hidden="true" className="required">*</span></label><input type = "text" required placeholder = "Enter your firstname" 
                    value = {this.state.firstName} onChange = {this.handleFirst} aria-describedby="required-description"></input><br/>
                    <label>Last Name </label><input type = "text"  placeholder = "Enter your lastname" 
                    value = {this.state.lastName} onChange = {this.handleLast}></input><br/>
                    <label>Email ID <span aria-hidden="true" className="required">*&nbsp; &nbsp;</span></label><input type="email"  required placeholder = "Enter your email" 
                    value = {this.state.email} onChange={(e) => this.handleEmail(e.target.value)}></input><br/>
                    <label>Password <span aria-hidden="true" className="required">*</span> </label><input type="password" required  placeholder = "Enter your password" 
                    value = {this.state.password} onChange = {this.handlePassword}></input><br/>
                    <label>Gender :</label><select value = {this.state.gender} onChange = {this.handleGender} required>
                            <option defaultValue>None</option><br/>
                            <option value="male">Male</option><br/>
                            <option value="female">Female</option><br/>
                    </select><br/><br/>
                    <input type="checkbox" name="check1" checked={this.state.check1} 
                    onChange={this.onCheckchange} required></input><small>
                    <span aria-hidden="true" className="required">*</span>I agree to the terms and conditions</small><br/>
                    <input type="submit" value="Submit" className="submit-Btn"/>
                </form>
            </div>
        </div>
    )
}
}
export default Form;
