import React from "react";
import "./addusers.scss"
import Button from '@mui/material/Button';


const AddUser = () => {



   function handleClick(evt) {

      let { name, surname,  password, user_phone, course, role} = evt.target.elements;


      name = name.value.trim()
      surname = surname.value.trim()
      password = password.value.trim()
      user_phone = user_phone.value.trim()
      course = course.value.trim()
      role = role.value.trim()

      
      fetch('http://localhost:5000/users', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         mode: 'cors',
         body: JSON.stringify({
            name,
            surname,
            password,
            user_phone,
            course,
            role
         })
      })
      
   }
   return (
      <>

      <h4>
         Add User
      </h4>
         <div className="add-post-container">
            <form  action="" onSubmit={handleClick}>
               <input type="text" className="form-control" placeholder='name' name='name'/>
               <input type="text" className="form-control" placeholder='surname' name='surname'/>
               <input type="number" className="form-control" placeholder='password' name='password'/>
               <input type="number" className="form-control" placeholder='phone_number' name='user_phone'/>
               <input type="text" className="form-control" placeholder='course' name='course'/>
               <input type="text" className="form-control vf" placeholder='role' name='role' defaultValue={'student'}/>
               <Button variant="contained" type="submit">Add user</Button>
               
            </form>
         </div>
      </>
   );
};

export default AddUser;