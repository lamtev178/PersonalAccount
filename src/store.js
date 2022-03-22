import { configureStore } from '@reduxjs/toolkit'


export default configureStore({
  reducer:isAuthReduser
})


function isAuthReduser(state = {isAuth: false, userContacs:[]}, action) {
    switch(action.type){
      case 'LOGIN_IN' :
        return {...state, isAuth:true, userContacs:action.payload}

      case 'LOGIN_OUT' : 
        return {...state, isAuth:false, userContacs:[]}

      default: 
        return state
}}