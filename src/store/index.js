import { createStore } from 'redux';
import notesReducer from '../reducer/notesApp';

const store = createStore(notesReducer);

export default store;
