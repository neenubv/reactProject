import React, { Component } from 'react'


class RestAPISample extends Component{
    state = {
        contacts: [
            // {
            // id:1,
            // name:"neenu",
            // email: "abc@gmail.com"
            // },
            // {
            // id:2,
            // name:"Thomas",
            // email: "xyz@gmail.com"
            // },
            // {
            // id:3,
            // name:"Evyn",
            // email: "pqr@gmail.com"
            // }
        ]
      }
      componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => {
          this.setState({ contacts: data })
        })
        .catch(console.log)
      }

    render(){
        return(
            <div className="col-sm-8 container pt-12">
                    <center><h1>Example</h1></center>
                    {this.state.contacts.slice(0,5).map((contact) => (
                    <div class="card m-50">
                    <div class="card-body">
                        <h5 class="card-title">{contact.id}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{contact.name}</h6>
                        <h7 class="card-text">{contact.email}</h7>
                    </div>
                    </div>
                ))}
            </div> 
        );
    
    }
}

export default RestAPISample;