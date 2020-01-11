import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text>Home Screen</Text>
        </View>
        <Button
          title="Go to Login"
          onPress={() => this.props.navigation.navigate('Login')}/>
      </SafeAreaView>
    );
  }
}

HomeScreen.navigationOptions = {
  headerShow: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  }
});