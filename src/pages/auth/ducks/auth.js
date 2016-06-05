import axios from 'axios'
import { push } from 'react-router-redux'
//http://stackoverflow.com/questions/32612418/transition-to-another-route-on-successful-async-redux-action

const defaultState = {
  login:true,
  auth: false,
  username: null
};

export default function reducer(state = defaultState, action) {

  switch (action.type) {
    case 'LOG_IN':
      if(action.data) {

        return {...state, ...action.data, login:false}
        
      } else {
        return state;
      }

    case 'GUEST':
    console.log(action)
      return {...state, ...action.data}

    case 'SIGN_OUT':
    console.log(action.data)
      return {...state, login: action.login, auth: action.auth, username: action.username}

    case 'SESSION_CHECK':
      console.log('detector')

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
    axios(config)
    .then(({data}) => {
      console.log(data)
      return dispatch({type:'LOG_IN', data})
    })
    .then((action) => {
      console.log(action)
        if (action.type === 'LOG_IN') {
            dispatch(push('/course/create'));
        }
    });
  }

}

export function handleGuest() {

  return (dispatch) => {
    axios.get('http://localhost:8000/guest', {withCredentials: true})
    .then(({data}) => {
      console.log(data)
      dispatch({type:'GUEST', data})
    })
    .then((action) => { 
      console.log(action)
        // if (action.type === 'GUEST') {
            dispatch(push('/course/create'));
        // }
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

export function checkSession() {
  return (dispatch) => {
    axios.get('http://localhost:8000/checkSession', {withCredentials: true}).then(({data}) => {
      console.log(data)
      if (data) {
        dispatch({type:'LOG_IN', data})
      }
   
    });
  }
};

export function handleSignOut() {

  return (dispatch) => {
    axios.get('http://localhost:8000/logout', {withCredentials: true}).then( () => {

        dispatch({    
          type: 'SIGN_OUT',
          login: true,
          username: null,
          auth:false
        })
   
    });
  }


}

// export function handleSignOut() {
//   return {
//     type: 'SIGN_OUT',
//     login: true,
//     username: null,
//     auth:false
//   }
// }