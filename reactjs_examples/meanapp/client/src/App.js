// /client/App.js
import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  // initialize our state
  state = {
    data: [],
    id: 0,
    message: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null,
  };

  // when component mounts, first thing it does is fetch all existing data in our db
  // then we incorporate a polling logic so that we can easily see if our db has
  // changed and implement those changes into our UI
  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }

  // never let a process live forever
  // always kill a process everytime we are done using it
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  // just a note, here, in the front end, we use the id key of our data object
  // in order to identify which we want to Update or delete.
  // for our back end, we use the object id assigned by MongoDB to modify
  // data base entries

  // our first get method that uses our backend api to
  // fetch data from our data base
  getDataFromDb = () => {
    fetch('http://localhost:3001/api/getData')
      .then((data) => data.json())
      .then((res) => this.setState({ data: res.data }));
  };

  // our put method that uses our backend api
  // to create new query into our data base
  putDataToDB = (message) => {
    let currentIds = this.state.data.map((data) => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post('http://localhost:3001/api/putData', {
      id: idToBeAdded,
      message: message,
    });
  };

  // our delete method that uses our backend api
  // to remove existing database information
  deleteFromDB = (idTodelete) => {
    parseInt(idTodelete);
    let objIdToDelete = null;
    this.state.data.forEach((dat) => {
      if (dat.id == idTodelete) {
        objIdToDelete = dat._id;
      }
    });

    axios.delete('http://localhost:3001/api/deleteData', {
      data: {
        id: objIdToDelete,
      },
    });
  };

  // our update method that uses our backend api
  // to overwrite existing data base information
  updateDB = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    parseInt(idToUpdate);
    this.state.data.forEach((dat) => {
      if (dat.id == idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.post('http://localhost:3001/api/updateData', {
      id: objIdToUpdate,
      update: { message: updateToApply },
    });
  };

  // here is our UI
  // it is easy to understand their functions when you
  // see them render into our screen
  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">Start Bootstrap</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
         <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      <p>I'M READY TO USE THE BACK END APIS! ;-</p>
        <ul className="container">
          {data.length <= 0
            ? 'NO DB ENTRIES YET'
            : data.map((dat) => (
                <li style={{ 'list-style': 'none' }} key={data.message}>
                    {dat.id} <span style={{ color: 'gray' }}> : </span>  {dat.message}
                </li>
              ))}
        </ul>
       
       <form className="container" >
  <div class="row mb-3">
  <div class="col-md-2 themed-grid-col">
  <select className="form-control">
            <option>All Topic</option>
            <option>javascript</option>
            <option>es6</option>
            <option>reactjs</option>
            <option>nodejs</option>
            <option>express</option>
            <option>aws</option>
            <option>jest</option>
            <option>javascript</option>
          </select>
          </div>
    <div class="col-md-3 themed-grid-col">
    <input
            type="text"
            onChange={(e) => this.setState({ message: e.target.value })}
            placeholder="add something in the database"
            
            className="form-control"
          />
    </div>
    <div class="col-md-3 themed-grid-col">
    <input
            type="text"
            placeholder="add something in the database"
            className="form-control"
          />
    </div>
    <div class="col-md-3 themed-grid-col">
    <button onClick={() => this.putDataToDB(this.state.message)} className="btn btn-primary">
            ADD
          </button>
    </div>
  </div>
  <div class="row mb-3">
  <div class="col-md-2 themed-grid-col">
  <select className="form-control">
            <option>All Topic</option>
            <option>javascript</option>
            <option>es6</option>
            <option>reactjs</option>
            <option>nodejs</option>
            <option>express</option>
            <option>aws</option>
            <option>jest</option>
            <option>javascript</option>
          </select>
          </div>
      <div class="col-md-3 themed-grid-col">
      <input
                type="text"
                placeholder="put id of item to delete here"
                className="form-control"
              />
      </div>
      <div class="col-md-3 themed-grid-col">
      <input
              type="text"
              
              onChange={(e) => this.setState({ idToDelete: e.target.value })}
              placeholder="put id of item to delete here"
              className="form-control"
            />
      </div>
      <div class="col-md-3 themed-grid-col">
      <button onClick={() => this.deleteFromDB(this.state.idToDelete)} className="btn btn-secondary">
              DELETE
            </button>
            </div>
  </div>   
  <div class="row mb-3">
  <div class="col-md-2 themed-grid-col">
        <select className="form-control">
            <option>All Topic</option>
            <option>javascript</option>
            <option>es6</option>
            <option>reactjs</option>
            <option>nodejs</option>
            <option>express</option>
            <option>aws</option>
            <option>jest</option>
            <option>javascript</option>
          </select>
          </div>
    <div class="col-md-3 themed-grid-col">
      <input
            type="text"
             
            onChange={(e) => this.setState({ idToUpdate: e.target.value })}
            placeholder="id of item to update here"
            className="form-control"
          />
          </div>
    <div class="col-md-3 themed-grid-col">
      <input
            type="text"
            
            onChange={(e) => this.setState({ updateToApply: e.target.value })}
            placeholder="put new value of the item here"
            className="form-control"
          />
          </div>
    <div class="col-md-3 themed-grid-col">
      <button
            onClick={() =>
              this.updateDB(this.state.idToUpdate, this.state.updateToApply)
            }
            className="btn btn-danger"
          >
            UPDATE
          </button>
          </div>
      </div> 
  </form> 
      
      </div>
    );
  }
}

export default App;