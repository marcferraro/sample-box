export const loginSuccess = (user) => {
  // console.log(user.name)
    return {
      type: 'LOGIN_SUCCESS',
      user: user
    }
  }