import _ from 'lodash';

const SAVE = 'formProgress/SAVE';

const defaultState = {
  completed: {}
};

export default function reducer(state = defaultState, { type, ...payload } = {}) {
  switch (type) {
    case SAVE:
      return {
        ...state,
        completed: {
          ...state.completed,
          [payload.formName]: true
        }
      };

    default: return state;
  }
}


/* Action Creators */


/* Selectors */

