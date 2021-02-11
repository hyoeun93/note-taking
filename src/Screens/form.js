import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

export default function Form({ navigation, route }) {
  const [noteTitle, setNoteTitle] = useState('Add Note Title');
  const [noteDescription, setNoteDescription] = useState(
    'Add Note Description'
  );

  function onSaveNote() {
    route.params.addNotes({ noteTitle, noteDescription });
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.title}
        value={noteTitle}
        onChangeText={setNoteTitle}
        mode="outlined"
      />
      <TextInput
        style={styles.description}
        value={noteDescription}
        onChangeText={setNoteDescription}
        mode="flat"
      />
      <TouchableOpacity style={styles.fab}>
        <Button
          title="+"
          disabled={noteTitle == '' ? true : false}
          onPress={() => onSaveNote()}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  iconButton: {
    backgroundColor: 'purple',
    position: 'absolute',
    right: 0,
    top: 30,
    margin: 10,
  },
  title: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
  description: {
    height: 300,
    borderColor: 'gray',
    backgroundColor: '#fff',
    borderWidth: 1,
  },
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 0,
  },
});
