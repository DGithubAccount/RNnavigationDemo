import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const DetailsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Detail Screen.. again 😇"
        onPress={() => navigation.push('Detail')}
      />
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate('Home')}
      />
      <Button title="Go Back Function " onPress={() => navigation.goBack()} />
      <Button
        title="pop To Top Function "
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
