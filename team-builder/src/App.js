import React, {useState} from 'react';
import ReactDom from "react-dom";
import logo from './logo.svg';
import './App.css';
import UserForm from "./components/UserForm";
import Users from "./components/Users";

function App() {

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "default",
      email: "default@default.com",
      role: "devops"

    }
  ]);

  const  addNewUser = user => {
    const newUser = {
      id: Date.now(),
      name: user.name,
      email: user.email,
      role : user.role
    
    }
    setUsers([...users, newUser]);
  }

  const editUser = user => {
    
  }

  return (
    <div className = "App" >
      <h1>User List</h1>
      <UserForm addNewUser = {addNewUser}/>
      <Users users = {users}/>
    
    </div>
  );
}

export default App;
