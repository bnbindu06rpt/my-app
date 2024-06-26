// import * as FileSystem from 'expo-file-system';
// import { Asset } from 'expo-asset';
// import { View, Text, ActivityIndicator } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import * as SQLite from 'expo-sqlite';
// //import { useSQLiteContext } from "expo-sqlite/next";

// export const loadDatabase = async () => {
//   const dbName = "formData.db";
//   const dbAsset = require("../db/formData.db");
//   const dbUri = Asset.fromModule(dbAsset).uri;
//   const dbFilePath = `${FileSystem.documentDirectory}SQLite/${dbName}`;
//   console.log(dbFilePath);
//   const fileInfo = await FileSystem.getInfoAsync(dbFilePath);
//   console.log("File info", fileInfo);
//   if (!fileInfo.exists) {
//     await FileSystem.makeDirectoryAsync(`${FileSystem.documentDirectory}SQLite`, { intermediates: true });
//     await FileSystem.downloadAsync(dbUri, dbFilePath);
//     console.log("file system", FileSystem)
//   }
//   return SQLite.openDatabase(dbName);
// };

// export default function Database() {
//   const [dbLoaded, setDbLoaded] = useState(false);
//   const [error, setError] = useState(null);
//   //const off=  useSQLiteContext();

//   useEffect(() => {
//     loadDatabase()
//       .then(() => setDbLoaded(true))
//       .catch((e) => {
//         console.error(e);
//         setError(e);
//       });
//   }, []);

//   if (error) {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Error loading database: {error.message}</Text>
//       </View>
//     );
//   }

//   if (!dbLoaded) {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <ActivityIndicator size="large" />
//         <Text>Loading Database...</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Coonecteddd</Text>
//     </View>
//   );
// }


// // import * as FileSystem from 'expo-file-system';
// // import * as SQLite from 'expo-sqlite';
// // import { Asset } from 'expo-asset';

// // export default async function Index() {
 
// //     async function openDatabase(pathToDatabaseFile){
// //       if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
// //         await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
// //       }
// //       const asset = await Asset.fromModule(require(pathToDatabaseFile)).downloadAsync();
// //       await FileSystem.copyAsync({
// //         from: asset.localUri,
// //         to: FileSystem.documentDirectory + 'SQLite/myDatabaseName.db',
// //       });
// //       return SQLite.openDatabase('myDatabaseName.db');
// //     }
// //     const db = SQLite.openDatabase('dbName', version);

// //     const readOnly = true;
// //     await db.transactionAsync(async tx => {
// //       const result = await tx.executeSqlAsync('SELECT COUNT(*) FROM USERS', []);
// //       console.log('Count:', result.rows[0]['COUNT(*)']);
// //     }, readOnly);
// //   return (
// //     <View>
// //       <Text>Iindex</Text>
// //     </View>
// //   )
// // }


import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Button } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import * as SQLite from 'expo-sqlite';
 
export const loadDatabase = async () => {
  const dbName = "formData.db";
  const dbAsset = require("../db/formData.db");
  const dbUri = Asset.fromModule(dbAsset).uri;
  const dbFilePath = `${FileSystem.documentDirectory}SQLite/${dbName}`;
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
  const [db, setDb] = useState(null);
 
  useEffect(() => {
    loadDatabase()
      .then((db) => {
        setDb(db);
        createTable(db);
        setDbLoaded(true);
      })
      .catch((e) => {
        console.error(e);
        setError(e);
      });
  }, []);

  const DeleteData = (db) => {
    db.transaction(tx => {
      tx.executeSql(
        `DELETE FROM "CustomerDocuments"`,
        ["5"],
        () => { console.log('Record deleted successfully'); },
        (tx, error) => { console.error('Error deleting record', error); }
      );
    });
  }

  const CreateDBTable=(db)=>{
    db.transaction(tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS customerDocuments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    customer_uuid TEXT,
    pan_or_form_60_id TEXT,
    poa_if_not_aadhaar_authenticated_id TEXT,
    mitc_document_id TEXT,
    communication_address_proof_or_declaration_id TEXT,
    miscellaneous_document_id TEXT,
    miscellaneous_document_issuedate TEXT,
    miscellaneous_document_expiredate TEXT,
    passport_or_visa_for_nri_oci_foreigner_id TEXT,
    passport_or_visa_for_nri_oci_foreigner_place_of_issue TEXT,
    passport_or_visa_for_nri_oci_foreigner_issuedate TEXT,
    passport_or_visa_for_nri_oci_foreigner_expiredate TEXT,
    signature_document_uri TEXT,
    photo_document_uri TEXT,
    pan_or_form_60_document_uri TEXT,
    poa_if_not_aadhaar_authenticated_document_uri TEXT,
    mitc_document_uri TEXT,
    communication_address_proof_or_declaration_document_uri TEXT,
    miscellaneous_document_document_uri TEXT,
    passport_or_visa_for_nri_oci_foreigner_document_uri TEXT,
    FOREIGN KEY (customer_uuid) REFERENCES Customerss(uuid)
);

      `,
        [],
        () => { console.log('Document table created successfully'); },
        (tx, error) => { console.error('Error creating Document table', error); }
      );
    });

  }
  
 
  const createTable = (db) => {
    db.transaction(tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS Customerss (
          uuid TEXT PRIMARY KEY,
          customer_type TEXT,
          product_options TEXT,
          applicant_type TEXT,
          number_of_applicants INTEGER,
          primary_holder_dob TEXT,
          mode_of_operation TEXT,
          middle_name TEXT,
          first_name TEXT,
          last_name TEXT,
          gender TEXT,
          date_of_birth DATE,
          place_of_birth TEXT,
          mother_name TEXT,
          father_name TEXT,
          primary_mobile_number TEXT,
          alternate_mobile_number TEXT,
          email_id TEXT,
          alternate_email_id TEXT,
          marital_status TEXT,
          address_line_1 TEXT,
          address_line_2 TEXT,
          address_line_3 TEXT,
          pincode TEXT,
          district TEXT,
          state TEXT,
          country TEXT,
          address_type TEXT,
          city TEXT
      );
      `,
        [],
        () => { console.log('Applicant table created successfully'); },
        (tx, error) => { console.error('Error creating applicant table', error); }
      );
    });
  };
 
  const getData = (db) => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM Customerss`,
        [],
        (tx, results) => {
          console.log('Data retrieved successfully');
          const rows = results.rows;
          let data = [];
          for (let i = 0; i < rows.length; i++) {
            data.push(rows.item(i));
          }
          console.log(data);
        },
        (tx, error) => { console.error('Error retrieving data', error); }
      );
    });
  };
 
  const insertData = (db) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO Customerss (
          uuid,
          customer_type,
          product_options,
          applicant_type,
          number_of_applicants,
          primary_holder_dob,
          mode_of_operation,
          middle_name,
          first_name,
          last_name,
          gender,
          date_of_birth,
          place_of_birth,
          mother_name,
          father_name,
          primary_mobile_number,
          alternate_mobile_number,
          email_id,
          alternate_email_id,
          marital_status,
          address_line_1,
          address_line_2,
          address_line_3,
          pincode,
          district,
          state,
          country,
          address_type,
          city
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
      `,
        [
          '123e4567-e89b-12d3-a456-426614174000',  
    'Individual',
    'Loan',
    'Primary',  
    '1',
    '1980-01-01',  
    'Single',
    'Middle',  
    'John',  
    'Doe',  
    'Male',
    '1980-01-01',  
    'City Z',  
    'Mother Name',
    'Father Name',  
    '1234567890',
    '0987654321',
    'email@example.com',
    'alt_email@example.com',  
    'Single',
    '123 Main St',  
    'Suite 100',  
    'Building A',
    '123456',  
    'District X',
    'State Y',  
    'Country A',  
    'Permanent',  
    'City Z'  
        ],
        () => { console.log('Data inserted successfully'); },
        (tx, error) => { console.error('Error inserting data', error); }
      );
    });
  };
 
  if (error) {
    return (
      <View style={styles.centered}>
        <Text>Error loading database: {error.message}</Text>
      </View>
    );
  }
 
  if (!dbLoaded) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
        <Text>Loading Database...</Text>
      </View>
    );
  }
 
  return (
    <View style={styles.centered}>
      <Text>Database Connected</Text>
      <Button title="Insert Data" onPress={() => insertData(db)} />
      <Button title="View Data" onPress={() => getData(db)} />
      <Button title="Craete table" onPress={() => createTable(db)} />
      <Button title="Delete data" onPress={() => DeleteData(db)} />
      <Button title="Create DB table" onPress={() => CreateDBTable(db)} />
    </View>
  );
}
 
const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
