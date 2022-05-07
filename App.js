import { StyleSheet, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import { defaultScreenOptions, ignoreLogs, screens } from './src/utilities/constants';
import ViewImage from './src/screens/ViewImage';

LogBox.ignoreLogs(ignoreLogs);

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultScreenOptions}>
        <Stack.Screen name={screens.home} component={Home} />
        <Stack.Screen name={screens.viewImage} component={ViewImage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
