import React, { useState,useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { router } from 'expo-router';
import { nomineeDetailsFormData } from '../../../components/formJsonData/nomineeFormData';
import Header from '../../../components/customComponents/header';
import { useFormContext } from '../../formContext';
import useIdStore from '../../globalStore';
import { useSQLiteContext } from 'expo-sqlite/next';
import Form from './form';
 
export default function NomineeDetailForm() {
  const { formData } = useFormContext();
  const [formValues, setFormValues] = useState({});
  const { updateFormData } = useFormContext();
  const uuid = useIdStore((state) => state.uuid); 
  console.log(uuid,"uuid number")
  const off = useSQLiteContext();
 
  console.disableYellowBox = true;
 
 


    useEffect(() => {
      setFormValues(formData);
    }, [formData]);
  
  const onSubmit = async () => {
    console.log('Form data', formValues);
        updateFormData(formValues);

      try {
        console.log('Form data', formValues);
        updateFormData(formValues);
       
      Alert.alert("Sucess")
      
        router.navigate('screens/forms/addressDetailsForm'); // Navigation to panVerificationScreen
      } catch (err) {
        console.log('error', err);
        router.navigate('screens/forms/addressDetailsForm');
      }
  };
 


  return (
    <View style={styles.container}>
      <Header backPath="screens/forms/sqliteCustomerProvider" />
      <Form elements={nomineeDetailsFormData.elements} onSubmit={onSubmit}/>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B3C9E7',
  }
  
});
 
 
 
 
 



