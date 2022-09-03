import React from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import { styles } from './styles';

export default function ItemList({ data, onDelete }) {
  return (
    <View style={styles.container}>
      <FlatList
        testID='flatTodo'
        data={data}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View key={data?.id} style={styles.viewItem}>
              <Text>{item?.text}</Text>

              <TouchableOpacity
                testID={`btnDelete`}
                style={styles.button}
                onPress={() => onDelete(item.id)}>
                <Text style={styles.textButton}>X</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}