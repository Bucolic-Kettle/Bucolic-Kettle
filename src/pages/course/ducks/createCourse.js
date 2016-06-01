const SAVE = 'SAVE';
const SAVE_SUCCESS = 'SAVE_SUCCESS';

/* Reducers */

const defaultState = {
	isSaving: false,
	didSave: false,
};

export default function reducer(state = defaultState, { type, ...data } = {}) {
	switch (type) {
		case SAVE:
			return { ...state, isSaving: true, didSave: false };

		case SAVE_SUCCESS:
			return { ...state, isSaving: false, didSave: true };

		default:
			return state;
	}
};

/* Action Creators */

export function save({ course: { questions, videoUrl } }) {
  debugger;
  return (dispatch) => {
  	dispatch({ type: SAVE });
  };
};

/* Selectors */