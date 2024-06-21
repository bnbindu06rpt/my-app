import ProductType from './customerType';

import { View, Text } from 'react-native'
import React from 'react'
import { SQLiteProvider } from "expo-sqlite/next";

export default function SqliteCustomerProvider() {
  return (
 <SQLiteProvider databaseName="formData.db" useSuspense>
<ProductType/>
 </SQLiteProvider>
  )
}