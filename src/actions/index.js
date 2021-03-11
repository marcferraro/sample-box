export const loginSuccess = (user) => {
  // console.log(user.name)
  return {
    type: 'LOGIN_SUCCESS',
    user: user
  }
}

// export const currentUser = (user) => {
//   // console.log(user.name)
//   return {
//     type: 'CURRENT_USER',
//     user: user
//   }
// }