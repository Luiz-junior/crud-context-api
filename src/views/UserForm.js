import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import UsersContext from '../context/UsersContext';

const UserForm = ({ route, navigation }) => {
  // console.warn(Object.keys(props));
  const [user, setUser] = useState(route.params ? route.params : {});
  const { dispatch } = useContext(UsersContext);

  return (
    <View style={style.container}>
      <View style={style.sectionForm}>
        <Text>Name</Text>
        <TextInput
          style={style.input}
          onChangeText={name => setUser({...user, name})}
          placeholder="Informe o nome"
          value={user.name}
        />

        <Text>Email</Text>
        <TextInput
          style={style.input}
          onChangeText={email => setUser({...user, email})}
          placeholder="Informe o E-mail"
          value={user.email}
        />

        <Text>URL do Avatar</Text>
        <TextInput
          style={style.input}
          onChangeText={avatarUrl => setUser({...user, avatarUrl})}
          placeholder="Informe a URL do Avatar"
          value={user.avatarUrl}
        />

        <Button
          title="Salvar"
          onPress={() => {
            dispatch({
              type: user.id ? 'updateUser' : 'createUser',
              payload: user,
            })
            navigation.goBack()
          }}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  sectionForm: {
    width: '90%',
    paddingTop: 10
  },  
  input: {
    height: 40,
    width: '100%',
    borderColor: 'grey',
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 10,
  },
  saveBtn: {
    borderRadius: 5
  }
});

export default UserForm;