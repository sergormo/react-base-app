import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity} from 'react-native-gesture-handler';

function Separator() {
  return <View style={styles.separator}/>;
}

export default class LoginScreen extends React.Component {
  render() {
    return (
        <SafeAreaView style={styles.container}>
        <Separator/>
        <TouchableOpacity
          title="Go to Home"
          style="{styles.button}"
          onPress={() => this.props.navigation.navigate('Home')}>
              <Text style="{styles.buttonText}"> Launch! </Text>
          </TouchableOpacity>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#FAFF00'
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    fontWeight: 'bold',
    fontSize: 30,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 50,
  },
  infoText: {
    color: 'lightgrey'
  }
});