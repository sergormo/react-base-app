import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList} from 'react-native-gesture-handler';
import {RRSS} from '../assets/rrss';

function Item({element}) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{element.name}</Text>
    </View>
  );
}

export default class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
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
    justifyContent: 'center',
    marginBottom: 10
  }
});