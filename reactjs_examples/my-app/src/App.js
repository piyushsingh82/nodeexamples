import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import reduxdemo from './reduxdemo';

class App extends Component {
  // state = {
  //   persons : [
  //     {name:"Piyush Singh",age:37},
  //     {name:"Nutan Singh",age:35}
  //   ]
  // }
  // switchNameHandler = () =>{ 
  //   this.setState({
  //     persons:[
  //       {name:"Manthan",age:3},
  //       {name:"Nutan Singh",age:35}
  //     ]
  //   });
  // }
  constructor(props){
    super(props);
    this.state={data:[]};
  }
  componentDidMount(){
     axios.get('https://randomuser.me/api/?results=50')
     .then(response=> {
      const data = response.data.results;
        this.setState({ data })
     }).catch(error=> {
      console.log(error);
     });
  }
  render() {
    const UserList = (props) => (         
    <p>
     <img src= {props.picture.medium} /> 
    
    <p>
    <strong>name : </strong>
     {props.name.title} {props.name.first} {props.name.last},</p>
    
     </p>
    )

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
        </header>
          { this.state.data.map( (item, index) => <UserList key={index} {...item} />) } 
       
      <reduxdemo />
      </div>
     
    );
  }
}

export default App;
