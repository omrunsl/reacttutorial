import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Users from './components/Users'
import './App.css';

class App extends Component {
  state = {
    users: [
      {
        id : 1,
        name: "Ömer ÜNSAL",
        salary: "5000",
        department : "Bilişim"
      },
      {
        id : 2,
        name: "Ahmet ÜNSAL",
        salary: "6000",
        department : "Muhasebe"
      },
      {
        id : 3,
        name: "Zeynep ÜNSAL",
        salary: "7000",
        department : "Bilişim"
      }
    ]
  }
  deleteUser = (id) => {
    this.setState({
      users : this.state.users.filter(user => id !== user.id)
    })
  }
  render () {
    return (
      <div className="container">
      <Navbar />
      <hr/>
      <Users deleteUser = {this.deleteUser} users = {this.state.users}/>
    </div>
    )
  }
}


export default App;
