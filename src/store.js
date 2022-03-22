import { configureStore } from '@reduxjs/toolkit'


export default configureStore({
  reducer:isAuthReduser
})


function isAuthReduser(state = {isAuth: false}, action) {
    switch(action.type){
    case 'LOGIN_IN' :
      return {...state, isAuth:true}

    case 'LOGIN_OUT' : 
      return {...state, isAuth:false}

    default: 
      return state
}}