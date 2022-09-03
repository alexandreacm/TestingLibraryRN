import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Error({ visible, children }) {
  return (
    <View style={styles.viewError}>
      <Text style={styles.error}>{visible && children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewError: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
  },
  error: {
    fontSize: 16,
    color: '#FF0000',
  },
});
