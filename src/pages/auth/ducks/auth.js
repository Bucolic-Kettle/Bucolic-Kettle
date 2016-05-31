import axios from 'axios'

const defaultState = {
  auth: false
};

export default function reducer(state = defaultState, action) {

  switch (action.type) {
    case 'LOGGING':
      console.log("PAYLOAD", action.data)
      console.log('logging in');
      console.log("STATE: ", state)
      return {...state, auth: action.data}


    default: return state;
  }
}


/* Action Creators */
export function handleUser(endpoint, username, password) {

// could not get post to work with axios as in http://nikolay.rocks/2016-02-21-microservices-with-axios
// https://github.com/mzabriskie/axios/issues/113
// suggest this work around
  var config = {
    headers: {
         'Content-Type': 'application/x-www-form-urlencoded'
    },
    params: {
         username,
         password
    }
  };

  return (dispatch) => {
    axios.post(`http://localhost:8000/${endpoint}`, {}, config).then(({data}) => {
      dispatch({type:'LOGGING', data})
    });
  }

}

export function handleSignOUT(auth) {
  return {
    type: 'SIGN_OUT',
    auth
  }
}