import React from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {RRSS} from '../assets/rrss';

function Item({element}) {
  return (
    <View style={styles.item}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageSize}
          source={{
          uri: element.logo
        }}/>
      </View>
      <TouchableOpacity
        title="Go to Home"
        style={styles.button}
        onPress={() => this.props.navigation.navigate('Home')}>
        <Text style={styles.title}>{element.name}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text>Choose your preferred Social Network</Text>
        </View>
        <FlatList
          style={styles.list}
          data={RRSS}
          renderItem={({item}) => <Item element={item}/>}
          keyExtractor={item => item.name}/>
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
    justifyContent: 'flex-start',
    marginBottom: 20
  },
  header: {
    marginVertical: 20
  },
  list: {
    flex: 1,
    alignSelf: 'stretch',
    textAlign: 'center',
    marginHorizontal: 10
  },
  item: {
    flex: 1,
    height: 80,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 10
  },
  itemLast: {},
  imageContainer: {
    marginLeft: 5,
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageSize: {
    width: '80%',
    height: '80%',
    resizeMode: 'stretch'
  },
  button: {
    marginHorizontal: 10
  }
});