### · Step one, set initial project

Using expo I setup a blank project.

```
npm install -g expo-cli
```

```
expo init "Project-Name"
```

```
cd "Project-Name"
```

```
expo start
```

Will launch a central local server to log and run deeplinks into both IOS simulator and Android Simulator (Developing with IOS Simulator)

### · Step two, adding project structure. 
#### Thinking base react-native app structure for the project

Navigation, will hold the router, native router, for managing the rooting.

Screens, will hold the base views, for the two main views. (Login and Home).

Components, components will hold basic components if there is a need for that.

Styles, styles folder will hold the different styling architecture.


### · Step three, navigation

Add routing structure. Seems react native has their own set of abstraction library to manage native navigation

[React-Navigation](https://reactnavigation.org/docs/en/getting-started.html)

Using expo-cli:

```
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context
```

I got problems with a dependency it seems to need "@react-native-community/masked-view" in order to run correctly in the ios simulator.

```
yarn add @react-native-community/masked-view
```

We are using a basic StackNavigator, it seems to be the basic cascade view history tracker. The library supports two more structures.

Adding to "navigation/AppNavigator.js" the routing structure.

```
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
```


### · Step linking between pages

Problems with navigation: 

· "The navigation prop was missing when calling this.navigator. In react-navigation 3 you must set up your app container directly. 

More info: https://reactnavigation.org/docs/en/app-containers.html"

I had to use React.Component correctly to build the screens components was not passing the prop correctly.

Using React Native component [SafeAreaView](https://facebook.github.io/react-native/docs/safeareaview#__docusaurus) to avoid IOS filling the whole screen

** Forgot to add the Button component from react-native library and I was going crazy. -.-

Linking between Login and Home working!
