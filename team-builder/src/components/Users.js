import React from "react";
import styled from 'styled-components';
import UserForm from "./UserForm"

const UserList = styled.div `
    width:95%;
    height:95%;
    margin:3%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border: 1px solid black;


`;
const UserCard = styled.div `
    width:95%;
    margin:5%;
    border: 2px dotted black;    
    

`;

const EditButton = styled.button `

background-color: red; 
border: none;
color: white;
margin-bottom:15px;
padding: 10px 15px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 10px;
transition-duration: 0.4s;
:hover {
    background-color: red; 
     color: white;
}

`;

const Users = props => {
    return (
        <UserList>
            {props.users.map(item=>(
                <UserCard key = {item.id}>
                    <h2>{item.name}</h2>
                    <p>{item.email}</p>
                    <p>{item.role}</p>
                    <EditButton>Edit User</EditButton>
                    </UserCard>
            ))}
        </UserList>
    )
}
export default Users;