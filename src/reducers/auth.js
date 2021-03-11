const authReducer = (state = null, action) => {
    // console.log('hello from reducer')
    switch(action.type){
      case 'LOGIN_SUCCESS':
          console.log('hello from the reducer')
          return {
              id: action.user.id,
              username: action.user.username
            }
            default: 
            return state
        }
    }
    
    export default authReducer
    //   case 'CURRENT_USER':