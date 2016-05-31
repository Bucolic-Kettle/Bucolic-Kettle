const defaultState = {
  auth: false
};

export default function reducer(state = defaultState, action) {

  switch (action.type) {
    case 'LOGGING':
      console.log("PAYLOAD", action.auth)
      console.log('logging in');
      console.log("STATE: ", state)
      return {...state, auth: action.auth}


    default: return state;
  }
}


/* Action Creators */
export function handleSignIn(auth) {
  return {
    type: 'LOGGING',
    auth
  }
}

export function handleSignOUT(auth) {
  return {
    type: 'SIGN_OUT',
    auth
  }
}