import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Database from './openDatabase';
import { useSQLiteContext } from "expo-sqlite/next";

export default function Home() {
  const [Categories, setCategories] = useState([]);
  const off = useSQLiteContext();
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [searchId, setSearchId] = useState(''); // For the search ID input

  React.useEffect(() => {
    off.withTransactionAsync(async () => {
      await getCategoryById(5);

    });
  }, [off]);

  
  async function getData() {
    const categoriesResult = await off.getAllAsync(
      `SELECT * FROM Categories;`
    );
    setCategories(categoriesResult);
    console.log("categories", categoriesResult);
  }

  async function getCategoryById(categoryId) {
    const categoryResult = await off.getFirstAsync(
      `SELECT * FROM Categories WHERE id = ?;`,
      [categoryId]
    );
    setCategories(categoryResult);
    if (categoryResult) {
      setId(categoryResult.id);
      setName(categoryResult.name);
      setType(categoryResult.type);
      console.log("details", Categories.id)
    } else {
      alert("No category found with this ID.");
    }
  }

  async function insertTransaction() {
    console.log("inside insert query", id, name, type);
    off.withTransactionAsync(async () => {
      await off.runAsync(
        `
        INSERT INTO Categories (id, name, type) VALUES (?, ?, ?);
      `,
        [
          id,
          name,
          type
        ]
      );
      await getData();
    });
  }

  return (
    <View style={styles.container}>
      <Text>Search by ID</Text>
      <TextInput
        style={styles.input}
        placeholder="Search ID"
        value={searchId}
        onChangeText={setSearchId}
      />
      <Button title='Fetch Details' onPress={() => getCategoryById(searchId)} />

      <Text>Enter ID</Text>
      <TextInput
        style={styles.input}
        placeholder="ID"
        value={id}
        onChangeText={setId}
      />
      <Text>Enter Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <Text>Enter Type</Text>
      <TextInput
        style={styles.input}
        placeholder="Type"
        value={type}
        onChangeText={setType}
      />
      <Button title='Insert Data' color='green' onPress={insertTransaction} />
      <View>
     
        <View key={Categories.id} style={styles.categoryItem}>
          <Text>{Categories.name} : {Categories.type} : {Categories.id}</Text>
        </View>
   
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  categoryItem: {
    marginTop: 8,
  },
});