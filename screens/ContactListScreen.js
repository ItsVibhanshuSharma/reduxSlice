import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setName, setEmail, setNumber} from '../Slices/contactsSlice';
import {create} from 'react-test-renderer';

export default function ContactListScreen() {
  const name = useSelector(state => state.contacts.name);
  const email = useSelector(state => state.contacts.email);
  const number = useSelector(state => state.contacts.number); // Access 'name' from Redux store
  const dispatch = useDispatch();

  const handleChangeName = text => {
    dispatch(setName(text));
  };
  const handleChangeEmail = text => {
    dispatch(setEmail(text));
  };
  const handleChangeNumber = text => {
    dispatch(setNumber(text));
  };

  const handleSubmit = () => {
    console.log('Name:', name, email, number);
    dispatch(setName(''));
    dispatch(setEmail(''));
    dispatch(setNumber(''));
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter a Name"
        value={name}
        onChangeText={handleChangeName}
      />
      <TextInput
        placeholder="Enter a Email"
        value={email}
        onChangeText={handleChangeEmail}
      />
      <TextInput
        placeholder="Enter a Number s"
        value={number}
        onChangeText={handleChangeNumber}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
  },
});
