import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import { deleteNote } from '../action/index';

export default function ListItem({ item }) {
  const dispatch = useDispatch();

  const deleteNotes = (id) => {
    dispatch(deleteNote(id));
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => deleteNotes(item.id)}>
        <Text>{item.note.noteTitle}</Text>
        <Text>{item.note.noteDescription}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
});
