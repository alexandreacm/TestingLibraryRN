import React, { useState } from 'react';
import { StyleSheet, View, Platform } from 'react-native';

import AddList from '../../components/AddList';
import ItemsList from '../../components/ItemsList';
import Error from '../../components/Error'

export default function Home() {
  const [list, setList] = useState([])
  const [newText, setNewText] = useState(null);
  const [error, setError] = useState(false);

  function handleAdd() {
    if (newText === null || newText === '') {
      setError(true);
      return;
    }

    setList([
      ...list,
      {
        id: Math.floor(Math.random() * 100),
        text: newText
      }
    ]);
    setError(false);
    setNewText('');
  }

  function handleDelete(id) {
    setList(list.filter(item => item.id !== id));
  }

  return (
    <View style={styles.container}>
      <View>
        <AddList onPressAdd={handleAdd} value={newText} onChange={setNewText} />
        <Error visible={error}>Please insert a valid text</Error>
      </View>

      <View style={styles.viewList}>
        <ItemsList data={list} onDelete={handleDelete} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 60 : 0,
    margin: 20
  },
  viewList: {
    marginBottom: 10
  }
});
