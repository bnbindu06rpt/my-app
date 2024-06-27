import React, { useState,useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { router } from 'expo-router';
import { personalDetailsFormData } from '../../../components/formComponents/formData';
import Header from '../../../components/customComponents/header';
import { useFormContext } from '../../formContext';
import useIdStore from '../../globalStore';
import { useSQLiteContext } from 'expo-sqlite/next';
import Form from './form';
 
export default function PersonalDetailsForm() {
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

      try {
        console.log('Form data', formValues);
        updateFormData(formValues);
        await off.withTransactionAsync(async (tx) => {
          await off.runAsync(
              `UPDATE Customersss
                 SET
                  customer_type = ?,
                  product_options = ?,
                  applicant_type = ?,
                  number_of_applicants = ?,
                  primary_holder_dob = ?,
                  mode_of_operation = ?,
                  middle_name = ?,
                  first_name = ?,
                  last_name = ?,
                  gender = ?,
                  date_of_birth = ?,
                  place_of_birth = ?,
                  mother_name = ?,
                  father_name = ?,
                  primary_mobile_number = ?,
                  alternate_mobile_number = ?,
                  email_id = ?,
                  alternate_email_id = ?,
                  marital_status = ?
               WHERE uuid = ?;`,
              [
                  formValues.customer_type,
                  formValues.product_options,
                  formValues.applicant_type,
                  formValues.number_of_applicants,
                  formValues.primary_holder_dob,
                  formValues.mode_of_operation,
                  formValues.middle_name,
                  formValues.first_name,
                  formValues.last_name,
                  formValues.gender,
                  formValues.date_of_birth,
                  formValues.place_of_birth,
                  formValues.mother_name,
                  formValues.father_name,
                  formValues.primary_mobile_number,
                  formValues.alternate_mobile_number,
                  formValues.email_id,
                  formValues.alternate_email_id,
                  formValues.marital_status,
                  uuid // Replace with the actual uid value
              ]
          );
      });
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
      <Form elements={personalDetailsFormData.elements} onSubmit={onSubmit}/>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B3C9E7',
  }
  
});
 
 
 
 
 



