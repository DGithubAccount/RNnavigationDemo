# # create MaterialBottomTabNavigator implementation in React Native

A material-design themed tab bar on the bottom of the screen that lets you switch between different routes with animation. Routes are lazily initialized - their screen components are not mounted until they are first focused.

## npm Installations

```bash
 yarn add @react-navigation/material-bottom-tabs react-native-paper
```
```bash
npm install @react-navigation/native
```
```bash
yarn add react-native-reanimated
```
```bash
yarn add react-native-gesture-handler
```
```bash
yarn add react-native-screens
```
```bash
yarn add react-native-safe-area-context
```
```bash
yarn add @react-native-community/masked-view
```
```bash
pod install
```


## Usage

```react-native
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

```
## Packages version
 "react": "16.13.1"
 
 "react-native": "0.63.4"
 
 "@react-navigation/drawer": "^5.11.5"
 
## Run command
 "android": "react-native run-android"
 
 "ios": "react-native run-ios"
 
 
## Ref :
https://reactnavigation.org/docs/material-bottom-tab-navigator

## License
[Info.RahulDa](https://)

![](https://media.giphy.com/media/jp9d3G3SIfOOnWbjkU/giphy.gif)


