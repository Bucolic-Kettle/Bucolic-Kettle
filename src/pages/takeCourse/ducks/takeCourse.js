import axios from 'axios'
import { push } from 'react-router-redux'
import { merge } from 'lodash';

///for testing before api integration
import sample from '../../../../sample.js'
///

const defaultState = {
  display: 'Description',
  courseName: sample[2].title,
  courseDescription: 'Film denim tanto physical drone voodoo god bridge Sensory saturation point rebar voodoo god military-grade narrative Kowloon assassin boat sign Shibuya wonton soup cartel. Engine Tokyo film concrete soul-delay nano-saturation point sub-orbital geodesic silent. Post-modem chrome plastic futurity alcohol bicycle dissident rebar sub-orbital. Denim gang euro-pop sentient apophenia papier-mache dead plastic. Knife city computer artisanal 8-bit assault military-grade car vehicle denim range-rover shoes render-farm voodoo god warehouse carbon. Dome table pen Tokyo apophenia savant San Francisco alcohol narrative. Vinyl gang RAF grenade assault ablative BASE jump stimulate table. A.I. futurity artisanal otaku kanji tanto neon. Weathered chrome order-flow semiotics fetishism engine sprawl dome 3D-printed euro-pop table numinous spook-space. Assault Kowloon faded youtube garage vehicle nano-sprawl narrative. Refrigerator market assassin claymore mine Chiba pistol semiotics augmented reality dolphin industrial grade corporation into rain. Nano-smart-sunglasses assassin concrete stimulate corrupted apophenia tower semiotics youtube. Woman crypto-engine sensory range-rover apophenia-space towards euro-pop tanto boat media corrupted. Cardboard savant numinous footage military-grade warehouse receding grenade dolphin Chiba media soul-delay kanji saturation point. Papier-mache dissident singularity footage shanty town marketing-space dead garage Chiba alcohol digital beef noodles denim semiotics systema claymore mine. Corporation military-grade neural sensory into media hacker wristwatch woman beef noodles Legba drugs vinyl camera soul-delay decay towards. Refrigerator denim uplink sign warehouse neural Legba futurity. garage corrupted uplink long-chain hydrocarbons. Cartel boy otaku digital cardboard human city render-farm media spook BASE jump dissident apophenia market systemic realism. Rain-space savant dead network car motion assault industrial grade into tower. Hacker physical savant order-flow human media numinous vinyl kanji bicycle nodality. Soul-delay courier grenade Kowloon DIY euro-pop dead. ',
  courseUrl: 'https://www.youtube.com/embed/4ZAEBxGipoA',
  courseQuestions: sample[2].questions,
  courseAnswers: sample[2].answers,
  userAnswers: {}
};

export default function reducer(state = defaultState, action) {

  switch(action.type) {
    case 'SHOW_VIDEO':
      return {...state, display: action.display}

    case 'SHOW_DESCRIPTION':
      return {...state, display: action.display}

    case 'SHOW_QUIZ':
      return {...state, display: action.display}

    case 'SELECT_ANSWER':  
    //http://stackoverflow.com/questions/32135779/updating-nested-data-in-redux-store
      let userSelect = {
        userAnswers: {[action.question]: action.selection}
      }

      return merge({}, state, userSelect)

    case 'SUBMIT_QUIZ':

      let allCorrect = true;

      state.courseAnswers.forEach( (val,i) => {
        if(val !== state.userAnswers[i]) {
          allCorrect = false
        }
      });

      return allCorrect ? {...state, display: 'Passed'} : {...state, display: 'Failed'} 

    default: 
      return state;    
    }
  }


/* Action Creators */
export function handleVideo() {

  return {
    type: 'SHOW_VIDEO',
    display: 'VideoPlayer'
  }
}

export function handleDescription() {
  return {
    type: 'SHOW_DESCRIPTION',
    display: 'Description'
  }
}

export function handleQuiz() {
  return {
    type: 'SHOW_DESCRIPTION',
    display: 'Quiz'
  }
}

export function handleAnswers(question, selection) {
  return {
    type: 'SELECT_ANSWER',
    question,
    selection
  }
}

export function handleSubmit(question, selection) {
  return {
    type: 'SUBMIT_QUIZ',
    question,
    selection
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