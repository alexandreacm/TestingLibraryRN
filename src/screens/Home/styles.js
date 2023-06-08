import { StyleSheet, Platform } from 'react-native';

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

export { styles };
