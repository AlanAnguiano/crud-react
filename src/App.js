import React, { Component } from 'react';
import Nav from './components/Nav';
import Dashboard from './components/Dashboard';
import Options from './components/Options';
import './App.css';



class App extends Component {
  constructor(){
    super();
    this.state = {
      registros: [],
      del:false,
    }
    this.getDataForm = this.getDataForm.bind(this);
    this.deleteData = this.deleteData.bind(this)
  }
  
  getDataForm(data){
    this.setState(data)
  }
  deleteData(aceptar){
    this.setState({del:aceptar});
  }
  render() {

    return (
      <div className="App">
        <Nav/>
        <div className="mainCont container-fluid d-flex justify-content-center flex-column align-items-center">
          <Dashboard add={this.state} delete={this.state.del} resetDel={this.deleteData}/>
          <Options getData={this.getDataForm} delete={this.deleteData}/>  
        </div> 
      </div>
    );
  }
}

export default App;
