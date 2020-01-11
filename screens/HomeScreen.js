import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Linking
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {RRSS} from '../assets/rrss';
import {dapps} from '../assets/dapps';

const openURL = (url) => {
  Linking
    .openURL(url)
    .catch((err) => console.error('An error occurred', err));
}

const Item = ({element}) => {
  return (
    <TouchableOpacity onPress={() => openURL(element.link)}>
      <View style={styles.item}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageSize}
            source={{
            uri: element.logo
          }}/>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textStyle}>{element.name}</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

export default class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text>Choose your preferred DApp Blockchain</Text>
        </View>
        <FlatList
          style={styles.list}
          data={dapps}
          renderItem={({item}) => <Item element={item}/>}
          keyExtractor={item => item.name}/>
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
    marginBottom: 20,
    backgroundColor: '#ADFF00'
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
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'lightgrey',
    marginRight: 10
  }
});