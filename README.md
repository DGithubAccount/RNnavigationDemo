# # Drawer navigation implementation in React Native

Common pattern in navigation is to use drawer from left (sometimes right) side for navigating between screens.


## npm Installations

```bash
 yarn add @react-navigation/drawer
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
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


const Drawer = createDrawerNavigator();


<NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>

```
## Packages version
 "react": "16.13.1"
 
 "react-native": "0.63.4"
 
 "@react-navigation/drawer": "^5.11.5"
 
## Run command
 "android": "react-native run-android"
 
 "ios": "react-native run-ios"
 
 
## Contributing


## License
[Info.RahulDa](https://)

![](https://media.giphy.com/media/jp9d3G3SIfOOnWbjkU/giphy.gif)


