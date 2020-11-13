import React, { useContext } from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
import { ListItem, Button, Icon } from 'react-native-elements';

import UsersContext from '../context/UsersContext';

const UserList = props => {

  const { state, dispatch } = useContext(UsersContext);

  function confirmUserDeletion(user) {
    Alert.alert('Excluir usuário', 'Deseja excluir o usuário?', [
      { 
        text: 'Sim', 
        onPress() { dispatch({ type: 'deleteUser', payload: user }) }
      },
      { 
        text: 'Não' 
      }
    ]);
  }

  function getActions(user) {
    return (
      <>
        <Button 
          onPress={() => props.navigation.navigate('UserForm', user)}
          type="clear"
          icon={<Icon name='edit' size={25} color="#6a1b9a" />}
        />
        <Button 
          onPress={() => confirmUserDeletion(user)}
          type="clear"
          icon={<Icon name='delete' size={25} color="red" />}
        />
      </>
    )
  }

  function getUserItem({ item: user }) {
    return (
      <ListItem
        leftAvatar={{ source: { uri: user.avatarUrl } }}
        key={user.id}
        title={user.name}
        subtitle={user.email}
        bottomDivider
        rightElement={getActions(user)}
        onPress={() => props.navigation.navigate('UserForm', user)}
      >

      </ListItem>
    )
  };

  return (
    <View>
      <FlatList 
        data={state.users}
        keyExtractor={user => user.id.toString()}
        renderItem={getUserItem}
      />
    </View>
  );
}

export default UserList;