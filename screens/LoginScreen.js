import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function Separator() {
  return <View style={styles.separator}/>;
}

export default class LoginScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text>Login Screen</Text>
        </View>
        <Separator/>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}/>
      </SafeAreaView>
    );
  }
}

LoginScreen.navigationOptions = {
  headerShow: true
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});