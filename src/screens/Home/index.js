import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import AddList from '@components/AddList';
import ItemsList from '@components/ItemsList';
import Error from '@components/Error';

import { styles } from './styles';

import SplashScreen from 'react-native-splash-screen';

export default function Home() {
  const [list, setList] = useState([]);
  const [newText, setNewText] = useState(null);
  const [error, setError] = useState(false);

  function handleAdd() {
    let validation = newText === null || newText === '';

    if (validation) {
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

  useEffect(() => {
    SplashScreen.hide();
  }, []);

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
