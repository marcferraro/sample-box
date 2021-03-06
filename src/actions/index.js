export const loginSuccess = (user) => {
  return {
    type: 'LOGIN_SUCCESS',
    user: user
  }
}

export const fetchSampleSuccess = (samples) => {
  return {
    type: 'FETCH_SAMPLE_SUCCESS',
    samples: samples
  }
}

export const addSample = (sample) => {
  return {
    type: 'ADD_SAMPLE_SUCCESS',
    sample: sample
  }
}

export const selectSample = (sample) => {
  return {
    type: 'SELECT_SAMPLE',
    sample: sample
  }
}

export const updateSample = (sample) => {
  return {
    type: 'UPDATE_SAMPLE',
    sample: sample
  }
}

export const deleteSample = (sampleId) => {
  return {
    type: 'DELETE_SAMPLE',
    sampleId: sampleId
  }
}

// export const currentUser = (user) => {
//   // console.log(user.name)
//   return {
//     type: 'CURRENT_USER',
//     user: user
//   }
// }