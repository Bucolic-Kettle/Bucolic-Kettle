import axios from 'axios'
import { push } from 'react-router-redux'

import sample from '../../../sample';


const defaultState = {
  all: sample,
  results: sample
};

export default function reducer(state = defaultState, action) {

  switch (action.type) {
    case 'SEARCH':
      var filtered = state.all.filter(val => {

        if (val.description.indexOf(action.query) !== -1 || val.title.indexOf(action.query) !== -1) {
          return val;
        }

      });       
      
      return {...state, results: filtered}
      //console.log("FILERED: ", ret)

    case 'SHOW_ALL':
      return {...state, results: state.all}


    default: return state;
  }
}


/* Action Creators */
export function search(dispatch, query) {
console.log('dispatch: ', dispatch)
  dispatch(push('/search/results')); // this will happen in return from asyn axios call 

  return {
    type: 'SEARCH',
    query
  }
}

export function showAll(dispatch, query) {

  dispatch(push('/search/results')); // this will happen in return from asyn axios call 

  return {
    type: 'SHOW_ALL',
  }
}

// export function checkSession() {
//   return (dispatch) => {
//     axios.get('http://localhost:8000/checkSession', {withCredentials: true}).then(({data}) => {
//       dispatch({type:'SESSION_CHECK', data})
//     });
//   }
// };
