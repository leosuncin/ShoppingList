import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Text, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddItem = ({onAddItem}) => {
  const [text, setText] = useState('');
  return (
    <View>
      <TextInput
        placeholder="Add Item..."
        style={styles.input}
        value={text}
        onChangeText={setText}
      />
      <Icon.Button
        name="plus"
        size={20}
        backgroundColor="#c2bad8"
        iconStyle={styles.btn}
        onPress={() => {
          if (text) {
            onAddItem(text);
          } else {
            Alert.alert('Error', 'Please enter an item', [{text: 'OK'}]);
          }
          setText('');
        }}>
        <Text style={styles.btnText}>Add Item</Text>
      </Icon.Button>
    </View>
  );
};
AddItem.propTypes = {
  onAddItem: PropTypes.func.isRequired,
};
const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
  },
});

export default AddItem;
