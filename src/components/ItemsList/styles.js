import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      marginTop: 30,
      justifyContent: 'center',
    },
    viewItem: {
      flex: 1,
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 4,
      marginBottom: 12,
      padding: 20,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    button: {
      width: 40,
      height: 40,
      backgroundColor: '#FF0000',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textButton: {
      fontSize: 20,
      textAlign: 'center',
      color: '#FFF',
    },
  });
  