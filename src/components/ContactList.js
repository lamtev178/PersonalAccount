import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input } from 'reactstrap';
const axios = require('axios').default;

function ContactList(){  
  const dispatch= useDispatch()
  const userContacs = useSelector(state => state.userContacs)
  console.log(userContacs);
  const [user, setUser] = useState(userContacs.contacts)
  const [inputValue, setInputValue] = useState('')
  useEffect(()=>{
    axios.patch(`http://localhost:8000/users/${userContacs.id}`,{"contacts":[...user]} )
    .then(() => console.log('Delete successful'))
  },
  [user])
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
  return(
    <div className="container">
      <Input type='text' value={inputValue} onChange={handleChange}/>
      <Button onClick={addUser} 
          className="mt-3" 
          color="primary" 
          size='sm'>
            Добавить Контакт
      </Button>
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