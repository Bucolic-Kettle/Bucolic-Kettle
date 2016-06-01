import axios from 'axios'
import { push } from 'react-router-redux'
//http://stackoverflow.com/questions/32612418/transition-to-another-route-on-successful-async-redux-action

const defaultState = {
  auth: false,
  username: null
};

export default function reducer(state = defaultState, action) {

  switch (action.type) {
    case 'LOG_IN':
      if(action.data) {

        return {...state, ...action.data}
        
      } else {
        return state;
      }

    case 'GUEST':
      return {...state, ...action.data}



    default: return state;
  }
}


/* Action Creators */
export function handleUser(endpoint, username, password) {

// could not get post to work with axios as in http://nikolay.rocks/2016-02-21-microservices-with-axios
// https://github.com/mzabriskie/axios/issues/113
// suggest this work around
  var config = {

    url: `http://localhost:8000/${endpoint}`,

    method: 'post',

    headers: {
         'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: {
         username,
         password
    },
    withCredentials: true

  };

  return (dispatch) => {
    axios(config).then(({data}) => {
      console.log(data)
      return dispatch({type:'LOG_IN', data})
    })
    .then((action) => {
        if (action.type === 'LOG_IN') {
            dispatch(push('/course/create'));
        }
    });
  }

}

export function handleGuest() {

  return (dispatch) => {
    axios.get('http://localhost:8000/guest').then(({data}) => {
      dispatch({type:'GUEST', data})
    });
  }

}

export function handleTest() {

  return (dispatch) => {
    axios.get('http://localhost:8000/test', {withCredentials: true}).then(({data}) => {
      dispatch({type:'TEST', data})
    });
  }

}

export function handleSignOUT(auth) {
  return {
    type: 'SIGN_OUT',
    auth
  }
}