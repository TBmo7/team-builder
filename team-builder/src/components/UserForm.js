import React, {useState} from "react";
import Users from "./Users";
import styled from "styled-components";

const SubmitButton = styled.button `

background-color: #4CAF50; 
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
transition-duration: 0.4s;
margin-top:10px;
:hover {
    background-color: #4CAF50; 
     color: white;
}

`;

const Form = styled.form `
width:95%;
height:95%;
margin:3%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

`;

const TextInput = styled.input `
margin-bottom:10px;

`;




const UserForm = props => {
    
    const [user, setUser] = useState({
        name: "",
        email: ""
    });

    const handleChanges = event => {
        setUser({ ...user, [event.target.name]:event.target.value})
    }

    const submitForm = event =>{
        event.preventDefault();
        props.addNewUser(user);
        setUser({name:"",email:"",role: ""})
    }

    return(
        <Form onSubmit = {submitForm}>
            
            <label htmlFor = "name">Name</label>
            <TextInput
                    type = "text"
                    placeholder = {`Name`}
                    id = "name"
                    name = "name"
                    value = {user.name}
                    onChange = {handleChanges}
 
            />
            
            <label htmlFor = "email">Email</label>
            <TextInput
                    type = "text"
                    placeholder = "Email"
                    id = "email"
                    name = "email"
                    value = {user.email}
                    onChange = {handleChanges}
            />
            <label htmlFor = "role">Role</label>
            <TextInput
                    type = "text"
                    placeholder = "Role"
                    id = "role"
                    name = "role"
                    value = {user.role}
                    onChange = {handleChanges}
            />
            
        <SubmitButton type = "submit">Add User</SubmitButton>             

        </Form>
        
    )


}

export default UserForm;
