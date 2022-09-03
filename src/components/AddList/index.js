import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function AddList({ onPressAdd, value, onChange }) {
  return (
    <View style={styles.inputArea}>
      <TextInput
        style={styles.input}
        testID="txtTodo"
        placeholder="Write something"
        placeholderTextColor="#CDCDCD"
        value={value}
        onChangeText={onChange}
      />

      <TouchableOpacity
        testID="btnTodo"
        style={styles.button}
        onPress={onPressAdd}>
        <Text testID="txtTodo" style={styles.textButton}>
          +
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputArea: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '85%',
    height: 50,
    borderBottomWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    fontSize: 18,
  },
  button: {
    width: '15%',
    height: 50,
    backgroundColor: '#503FDE',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 30,
    textAlign: 'center',
    color: '#FFF',
  },
});
