import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  FlatList,
  List,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import ListItem from '../Components/listItem';
import { addNote } from '../action/index';

export default function ListNotes({ navigation }) {
  // const [notes, setNotes] = useState([]);
  const notes = useSelector((state) => state);
  const dispatch = useDispatch();

  // const addNotes = (note) => {
  //   note.id = notes.length + 1;
  //   setNotes([...notes, note]);
  // };
  const addNotes = (note) => {
    dispatch(addNote(note));
  };

  return (
    <View style={styles.container}>
      {notes.length === 0 ? (
        <View style={styles.titleContainer}>
          <Text>List</Text>
        </View>
      ) : (
        <FlatList
          data={notes}
          renderItem={({ item }) => <ListItem item={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
      <TouchableOpacity style={styles.btn}>
        <Button
          title="+ Add A New Note"
          onPress={() => navigation.navigate('Form', { addNotes })}
          color="white"
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
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  btn: {
    backgroundColor: 'purple',
    position: 'absolute',
    margin: 10,
    right: 10,
    bottom: 10,
    color: 'white',
    borderRadius: 50,
    padding: 5,
  },
});
