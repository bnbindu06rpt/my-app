import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Card from '../../components/customComponents/cards';
import Header from '../../components/customComponents/header';
import FloatingButton from '../../components/customComponents/floatingButton';
import { router } from 'expo-router';
import { LogBox } from 'react-native';
import { SQLiteProvider } from 'expo-sqlite/next';
 
const goToActivityForm = () => {
  router.navigate('/screens/newApplicationOptions')
}
LogBox.ignoreAllLogs();
 
const List = () => {
  return (
  <SQLiteProvider databaseName='formData.db' useSuspense>
    <SafeAreaView style={styles.container}>
        <Header backPath="screens/loginScreen"/>
      <Card/>
      <FloatingButton onPress={goToActivityForm}/>
    </SafeAreaView>
    </SQLiteProvider>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
});
 
export default List;