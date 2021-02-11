export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

let noteID = 0;

export function addNote(note) {
  return {
    type: ADD_NOTE,
    id: noteID++,
    note,
  };
}

export function deleteNote(id) {
  return {
    type: DELETE_NOTE,
    payload: id,
  };
}
