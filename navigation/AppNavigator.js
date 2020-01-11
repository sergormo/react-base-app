import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator(  
{
  Home: HomeScreen,
  Login: LoginScreen,
},
{
  initialRouteName: 'Login',
}
);

export const AppContainer = createAppContainer(AppNavigator);
