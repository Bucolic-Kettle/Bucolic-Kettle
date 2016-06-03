import axios from 'axios'
import { push } from 'react-router-redux'
//http://stackoverflow.com/questions/32612418/transition-to-another-route-on-successful-async-redux-action


// TODO: Figure out how to get an array of items in the state and then show them using reducers
// and action Creators

const defaultState = {
  display: 'Description',
  courseName: 'Sample Course',
  courseDescription: 'This is a description',
  courseUrl: 'https://www.youtube.com/embed/4ZAEBxGipoA',
  courseQuestions: '[] This is quiz holder',
};

export default function reducer(state = defaultState, action) {

  switch(action.type) {
    case 'SHOW_RESULTS':
    console.log("HIT")
      return {...state, display: action.display}

    default:
      return state;
    }
  }


/* Action Creators */

export function handleResults() {
  return {
    type: 'SHOW_RESULTS',
    display: 'Results'
  }
}

// export function handleGuest() {

//   return (dispatch) => {
//     axios.get('http://localhost:8000/guest').then(({data}) => {
//       dispatch({type:'GUEST', data})
//     });
//   }

// }

// export function handleTest() {

//   return (dispatch) => {
//     axios.get('http://localhost:8000/test', {withCredentials: true}).then(({data}) => {
//       dispatch({type:'TEST', data})
//     });
//   }

// }

// export function handleSignOUT(auth) {
//   return {
//     type: 'SIGN_OUT',
//     auth
//   }
// }
