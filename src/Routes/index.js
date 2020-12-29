import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StartScreen, CardScreen, IDCardOne} from '../Pages';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="CardScreen" component={CardScreen} />
        <Stack.Screen name="IDCard" component={IDCardOne} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
