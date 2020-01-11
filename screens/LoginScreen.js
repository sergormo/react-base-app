import React from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';

function Separator() {
  return <View style={styles.separator}/>;
}

export default class LoginScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.imageSize}
            source={require('../assets/baby.png')}
          />
        </View>
        <Separator/>
        <TouchableOpacity
          title="Go to Home"
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.buttonText}>
            Select your Network!
          </Text>
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
    backgroundColor: '#ADFF00',
    padding: 10,
    paddingHorizontal: 20,
    borderColor: 'black',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 50,
    color: 'green'
  },
  infoText: {
    color: 'lightgrey'
  },
  imgContainer: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageSize: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch'
  },
});
