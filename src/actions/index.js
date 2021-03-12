export const loginSuccess = (user) => {
  return {
    type: 'LOGIN_SUCCESS',
    user: user
  }
}

export const addSample = (sample) => {
  return {
    type: 'ADD_SAMPLE_SUCCESS',
    sample: sample
  }
}

// export const currentUser = (user) => {
//   // console.log(user.name)
//   return {
//     type: 'CURRENT_USER',
//     user: user
//   }
// }