import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {uuid} from 'uuidv4';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {
      id: uuid(),
      text: 'Milk',
    },
    {
      id: uuid(),
      text: 'Eggs',
    },
    {
      id: uuid(),
      text: 'Bread',
    },
    {
      id: uuid(),
      text: 'Juice',
    },
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <AddItem
        onAddItem={text =>
          setItems(prevItems => [...prevItems, {id: uuid(), text}])
        }
      />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem
            item={item}
            onDelete={() =>
              setItems(prevItems =>
                prevItems.filter(element => element.id !== item.id),
              )
            }
          />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
