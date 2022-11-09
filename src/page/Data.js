
  import { useEffect,useState } from "react";

  function data (){
  const[users,setUsers]= useState ([]);
  useEffect (()=>{
    fetch("http://localhost:3001/users").then(res => res.json())
    .then(
      (result) =>{
        setUsers(result);
      }
    )
  })

{    {users.map(users => (
      id: {users.id},
      image: "https://resources.premierleague.com/premierleague/photos/players/40x40/p447715.png",
      username: {users.username},
      password : {users.password},
      firstname : {users.fname},
      lastname : {users.lname},
      birthday : {users.birthday},
      age :  {users.age} ,
      sex : {users.sex},
      email : {users.email},
      tel :  {users.tel},
      address : {users.address},
      more : {users.more},
      home : {users.homm}
    ))} 
   
   
  