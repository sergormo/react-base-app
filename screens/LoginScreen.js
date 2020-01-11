import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
        <Text>Login Screen</Text>
    </View>
  );
}

LoginScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  }
});
