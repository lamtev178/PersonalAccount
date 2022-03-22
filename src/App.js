import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import ContactList from './components/ContactList';
import MyForm from './components/MyForm';
const axios = require('axios').default;

function App() {
  const dispatch= useDispatch()
  const isAuth = useSelector(state => state.isAuth)
  function handleSubmit(e){
    e.preventDefault()
    console.log(e.target[0].value, e.target[1].value) 
    axios.get('http://localhost:8000/users')
    .then((response) => {
      response = response.data
      console.log(response);
      response = response.filter(user => {
        return (user.login===e.target[0].value) && (user.password===e.target[1].value)
      })
      console.log(response);
      response.length > 0 ? dispatch({type:'LOGIN_IN'}) : alert('This login not authorized')
    })
    .catch((error) => {
      alert(error)
    })
  }
  return (
    <div className="container mt-3">
      {isAuth? <ContactList /> : <MyForm onSubmit={handleSubmit}/>}
    </div>
  );
}

export default App;
