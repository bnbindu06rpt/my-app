import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import { View, Text, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as SQLite from 'expo-sqlite';
import Database from './openDatabase';
import { SQLiteProvider } from 'expo-sqlite/next';
import Home from './home';
import LoginScreen from './screens/loginScreen'



export default function Index() {
 



  return (

<>

 {/* <SQLiteProvider databaseName="mySQLiteDB.db" useSuspense><Home/></SQLiteProvider>
<Database/> */}
<LoginScreen/>



</>

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