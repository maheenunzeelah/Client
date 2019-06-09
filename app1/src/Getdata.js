import React, {Component} from 'react';
import axios from 'axios';


class Getdata extends Component{
   state={
       username:"",
       email:""
   }
    componentDidMount(){
        axios.get('http://localhost:3002/signin')
      .then(res => {
        var data = res.data;
        data.map((obj)=>{
            this.setState({
                username:obj.username,
                email:obj.email
           })
        })
       
    console.log(this.state.username)
      })

    }
render(){
    return(
        <div>
            <h3>username:{this.state.username},email:{this.state.email}</h3>
        </div>
    )
}
}
 export default Getdata; 