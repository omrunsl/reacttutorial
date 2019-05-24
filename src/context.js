import React, { Component } from 'react'

const UserContext = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter(user => action.payload !== user.id)
      }
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload]
      }

    default:
      return state
  }
}

export class UserProvider extends Component {
  state = {
    users: [
      {
        id : "1",
        name: "Ömer ÜNSAL",
        salary: "5000",
        department : "Bilişim"
      },
      {
        id : "2",
        name: "Ahmet ÜNSAL",
        salary: "6000",
        department : "Muhasebe"
      },
      {
        id : "3",
        name: "Zeynep ÜNSAL",
        salary: "7000",
        department : "Bilişim"
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action))
    }
  }
  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer


