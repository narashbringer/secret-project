import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
        var http = new XMLHttpRequest();
        var z=[]
        var url = this.props.baseurl+"/api/v1/auth/sign_in";
        var params = 'email='+this.state.email+'&password='+this.state.password;
            http.open("POST", url, true);
     
            var ss="";
          
           
      
        //Send the proper header information along with the request
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        var x= this.state.kys
        http.onreadystatechange = function() {
            if(http.readyState == 4 && http.status == 200) {
              x=false
              var e=JSON.parse( http.responseText)
        console.log(e)
             
            
                 var s = ""+http.responseText
                 var e = ""+http.getAllResponseHeaders()
                 z.push(http.getResponseHeader("expiry"))
                 z.push(http.getResponseHeader("client"))
                 z.push(http.getResponseHeader("uid"))
                 z.push(http.getResponseHeader("access-token"))
                 
                
                 ss = s.substring(9,s.length-2).split(",")
                var pid= JSON.parse(s)
                z.push(pid["data"]["provider_id"])
                var s3 = ss[0].split(":")
                z.push(s3[1])
            //   AsyncStorage.setItem("ID", s3[1])
            //   AsyncStorage.setItem("HEADERS", e)
              //PAY ATTENTION HERE
              //AsyncStorage.setItem("provider_id", s3[19])
                  
             // Actions.red({user_id:s3[1],client:client,uid:uid,token:token,expiry:expiry,provider_id:})
         }
                if(http.readyState == 4 && http.status >= 400) {
                  alert("Sorry, your username and password were incorrect ");
                  x=true
    
                }             
             
    
              }
        //       if(this.state.click == false){
        //         AsyncStorage.setItem("passcode",'')
        //         AsyncStorage.setItem("email",'')
        //   //  AsyncStorage.setItem("click",this.state.click)
        //       }else{
        //         AsyncStorage.setItem("passcode",this.state.password)
        //         AsyncStorage.setItem("email",this.state.username)
        //       }
    
    
    
    
      
        http.send(params)
    
    
              //var thing =JSON.stringify({user:{user_id:u,expiry:expiry,client:client,provider_id:pis,uid:uid,token:token,expiry:expiry}})
              setTimeout(() => {

            console.log(z)
          this.props.userHasAuthenticated(true,z);
        },1000)
      
   
        }
        
       // Auth.signIn(this.state.email, this.state.password);
       
       

  

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}