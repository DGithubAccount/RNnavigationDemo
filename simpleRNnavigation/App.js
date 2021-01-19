/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      <Text> Home Screen</Text>
      <Button title='Go to Detail Screen' onPress={()=> navigation.navigate('Detail')}/>
    </View>
  );
};

const DetailScreen = ({navigation}) => {
  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      <Text> Detail Screen</Text>
      <Button title='Go to Detail Screen.. again 😇' onPress={()=> navigation.push('Detail')}/>
      <Button title='Go to Home Screen' onPress={()=> navigation.navigate('Home')}/>
      <Button title='Go Back Function ' onPress={()=> navigation.goBack()}/>
    </View>
  );
};

const NewScreen = () => {
  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      <Text> New Screen</Text>
    </View>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
