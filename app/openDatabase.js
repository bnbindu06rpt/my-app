import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import { View, Text, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as SQLite from 'expo-sqlite';
//import { useSQLiteContext } from "expo-sqlite/next";

export const loadDatabase = async () => {
  const dbName = "formData.db";
  const dbAsset = require("../db/formData.db");
  const dbUri = Asset.fromModule(dbAsset).uri;
  const dbFilePath = `${FileSystem.documentDirectory}SQLite/${dbName}`;
  console.log(dbFilePath);
  const fileInfo = await FileSystem.getInfoAsync(dbFilePath);
  if (!fileInfo.exists) {
    await FileSystem.makeDirectoryAsync(`${FileSystem.documentDirectory}SQLite`, { intermediates: true });
    await FileSystem.downloadAsync(dbUri, dbFilePath);
  }
  return SQLite.openDatabase(dbName);
};

export default function Database() {
  const [dbLoaded, setDbLoaded] = useState(false);
  const [error, setError] = useState(null);
  //const off=  useSQLiteContext();

  useEffect(() => {
    loadDatabase()
      .then(() => setDbLoaded(true))
      .catch((e) => {
        console.error(e);
        setError(e);
      });
  }, []);

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Error loading database: {error.message}</Text>
      </View>
    );
  }

  if (!dbLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
        <Text>Loading Database...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text></Text>
    </View>
  );
}


// import * as FileSystem from 'expo-file-system';
// import * as SQLite from 'expo-sqlite';
// import { Asset } from 'expo-asset';

// export default async function Index() {
 
//     async function openDatabase(pathToDatabaseFile){
//       if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
//         await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
//       }
//       const asset = await Asset.fromModule(require(pathToDatabaseFile)).downloadAsync();
//       await FileSystem.copyAsync({
//         from: asset.localUri,
//         to: FileSystem.documentDirectory + 'SQLite/myDatabaseName.db',
//       });
//       return SQLite.openDatabase('myDatabaseName.db');
//     }
//     const db = SQLite.openDatabase('dbName', version);

//     const readOnly = true;
//     await db.transactionAsync(async tx => {
//       const result = await tx.executeSqlAsync('SELECT COUNT(*) FROM USERS', []);
//       console.log('Count:', result.rows[0]['COUNT(*)']);
//     }, readOnly);
//   return (
//     <View>
//       <Text>Iindex</Text>
//     </View>
//   )
// }

