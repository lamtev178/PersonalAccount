import React, {useState, useEffect} from "react";
import { useDispatch } from 'react-redux';
import { Button, Input } from 'reactstrap';

function ContactList(){  
  const dispatch= useDispatch()
  const {useState} = React
  const [user, setUser] = useState([
    {id : '1', name: 'Alex'},
    {id : '2', name: 'Djohn'},
    {id : '3', name: 'Sara'},
    {id : '4', name: 'Tom'},
    {id : '5', name: 'Mike'},
    {id : '6', name: 'Lara'},
  ])
  const [inputValue, setInputValue] = useState('')
  //   useEffect(()=>{
  //   const localStorageuser = localStorage.getItem('user') || []
  //   setUser(JSON.parse(localStorageuser))
  // },[])
  // useEffect(()=>{
  //   localStorage.setItem('user', JSON.stringify(user))
  // },[user])
  function addUser(){
    setUser([...user,{id : Date.now(), name:inputValue}])
    setInputValue('')
  }
  function removeUser(event){
    setUser([...user].filter(user => {return user.id !== event.id}))
  }
  function changeUser(event){
    removeUser(event)
    setInputValue(event.name)
  }
  function handleChange(event){
    setInputValue(event.target.value)
  }
  // function handleClick(){
  //   setActiveUser(user.filter((user) => {return user.name.toUpperCase().startsWith(inputValue.toUpperCase())}))
  // }   
  return(
    <div className="container">
      <Input type='text' value={inputValue} onChange={handleChange}/>
      <Button onClick={addUser} 
          className="mt-3" 
          color="primary" 
          size='sm'>
            Добавить Контакт
      </Button>
      {/* <Button onClick={handleClick} color="primary" size='sm'>Найти Контакт</Button> */}
      <ul style={{listStyle: 'none', fontSize:'22px'}}>
        {user.map((user) => {
          return(
            <li key={user.id} style={{display:"flex", justifyContent:'space-between'}} className='mt-5'>
              {user.name}
              <Button 
                color="primary"
                size='sm' 
                onClick={() => changeUser(user)}>
                  Change Contact
              </Button>
              <Button 
                color="primary"
                size='sm' 
                onClick={() => removeUser(user)}>
                  Remove Contact
              </Button>
            </li>
          )
        })}
      </ul>
          <Button 
          className="mt-3"
            color="primary"
            size='sm' 
            onClick={() => dispatch({type:"LOGIN_OUT"})}>
              Login out
          </Button>
    </div>
)}
export default ContactList