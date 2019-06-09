import React, {Component} from 'react';
import axios from 'axios';
// import {withRouter} from 'react-router-dom';



axios.interceptors.request.use(function (config) {
  // spinning start to show
  const token = localStorage.getItem("authorization");
  if (token) {
     config.headers.authorization = token
     
  }
  return config
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {

  return response;

}, function (error) {

  if (401 === error.response.status) {
     window.location='http://localhost:3000';

  } else {

      return Promise.reject(error);

  }

});
// axios.defaults.headers["authorization"] = localStorage.getItem('authorization'); //Attaching the header
class App extends Component {
  state={
    username:'',
    email:''
  }
  handlesubmit=(e)=>{
    e.preventDefault();
    console.log(this.state);
    axios.post('http://localhost:3002/signin',{username:this.state.username,email:this.state.email})
    .then(res => {
      if(res.data==="user not found"){
        document.write(res.data);
      }
      else{
      const token = res.data;
      localStorage.setItem("authorization",token);
      this.props.history.push('/home');
      }
    })

   
    //   axios.delete('http://localhost:3002/signin')
    //   .then(res=>{
    //    const data=res.data;
    //    console.log(data);
    //   })
  
  }
  handlechange=(e)=>{
        this.setState({
          [e.target.id]:e.target.value
        })
      }
  render(){
  return (
  <div className="App container">
    <center><h2>Login Form</h2></center>
    <form onSubmit={this.handlesubmit}>
     <div className="form-group">
      <label htmlFor="exampleInputUsername1">Username</label>
      <input type="text" className="form-control" id="username"  placeholder="Enter Username" onChange={this.handlechange} />
      
     </div>
     <div className="form-group">
      <label htmlFor="exampleInputEmail1">Email address</label>
      <input type="email" className="form-control" id="email"  placeholder="Enter email" onChange={this.handlechange} />
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
     </div>
      {/* <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="Password1" placeholder="Password" />
     </div>  */}
     
     <button type="submit" className="btn btn-primary">Submit</button>
   </form>
   <p className="success"></p>
  </div>
  );
 }
}
export default App;

