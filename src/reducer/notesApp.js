import { ADD_NOTE, DELETE_NOTE } from '../action/index';

const initiatState = [];

function notesReducer(state = initiatState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...state,
        {
          id: action.id,
          note: action.note,
        },
      ];
    case DELETE_NOTE:
      const deleteNewArray = state.filter((item) => item.id !== action.payload);
      return deleteNewArray;

    default:
      return state;
  }
}

export default notesReducer;
