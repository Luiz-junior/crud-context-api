import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Icon } from 'react-native-elements';

import UserList from './src/views/UserList';
import UserForm from './src/views/UserForm';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="UserList"
      screenOptions={screenOptions}
      >
        <Stack.Screen 
          name="UserList" 
          component={UserList}
          options={({ navigation }) => {
            return {
              title: 'Lista de usuários',
              headerRight: () => (
                <Button
                  onPress={() => navigation.navigate('UserForm')}
                  type="clear" 
                  icon={<Icon name="add" size={25} color="white" />}
                />
              )
            }
          }}
        />
        <Stack.Screen 
          name="UserForm" 
          component={UserForm} 
          options={{ title: 'Formulário de usuários' }} 
        />
      </Stack.Navigator>
      </NavigationContainer>
  );
};

const screenOptions = {
  headerStyle: {
    backgroundColor: '#f4511e'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
};

export default App;