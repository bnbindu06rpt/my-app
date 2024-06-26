import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import { useFormContext } from "../../formContext";
import { useFormDataStore } from '../../globalStore';
import Header from '../../../components/customComponents/header';
import { useSQLiteContext } from 'expo-sqlite/next';
import useIdStore from '../../globalStore';
import { router } from 'expo-router';

export default function Review() {
  const { formData } = useFormContext();
  const { setFinalFormData } = useFormDataStore();
  const [customerData, setCustomerData] = useState([]);
  const off = useSQLiteContext();
  const uuid = useIdStore((state) => state.uuid); 
  console.log("form context data", formData)

  useEffect(() => {
    getData();
  }, [off]); // Ensure useEffect runs when off (SQLite context) changes

  async function getData() {
    try {
       console.log("hii")
      const categoriesResult = await off.getAllAsync(
        `SELECT * FROM "Customerss";`,
        [uuid]
      );
      console.log("hii")
      setCustomerData(categoriesResult);
      console.log("Customer FINAL Data:", categoriesResult);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const handleSubmit = async () => {
    console.log("Inside submit");
    console.log(formData.address_line_1, formData.address_line_2, formData.address_line_3)
    try {
   
          await off.withTransactionAsync(async (tx) => {
            await off.runAsync(
                `UPDATE Customerss 
                 SET
                    customer_type = ?,
                    product_options = ?,
                    applicant_type = ?,
                    number_of_applicants = ?,
                    mode_of_operation = ?,
                    address_line_1 = ?,
                    address_line_2 = ?,
                    address_line_3 = ?,
                    address_type = ?,
                    alternate_email_id = ?,
                    email_id = ?,
                    alternate_mobile_number = ?,
                    district = ?,
                    marital_status = ?,
                    first_name = ?,
                    last_name = ?,
                    pincode = ?,
                    gender = ?,
                    middle_name = ?,
                    mother_name = ?,
                    father_name = ?,
                    state = ?,
                    place_of_birth = ?
                 WHERE uuid = ?;`,
                [
                    formData.customer_type,
                    formData.product_options,
                    formData.applicant_type,
                    formData.number_of_applicants,
                    formData.mode_of_operation,
                    formData.address_line_1,
                    formData.address_line_2,
                    formData.address_line_3,
                    formData.address_type,
                    formData.alternate_email_id,
                    formData.email_id,
                    formData.alternate_mobile_number,
                    formData.district, // Fixed here as formData.city was not matching with the schema
                    formData.marital_status, // Fixed here as formData.country was not matching with the schema
                    formData.first_name,
                    formData.last_name,
                    formData.pincode,
                    formData.gender,
                    formData.middle_name,
                    formData.mother_name,
                    formData.father_name,
                    formData.state,
                    formData.place_of_birth,
                    formData.uid // Add the uid value at the end of the array
                ]
            );
        });
        
      await getData();
      Alert.alert('Successfully Updated and Submitted!! ');
      router.navigate("/screens/listOfApplications")
    } catch (error) {
      await getData();
      console.error("Error inserting data:", error);
      // Alert.alert('Error');
    }
  };

  useEffect(() => {
    setFinalFormData(formData);
  }, [formData, setFinalFormData]);

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header backPath="/screens/forms/documentsForm" />
      </View>
      <Text style={styles.header}>Final Form Data:</Text>
      <View style={styles.card}>
        {Object.entries(formData).map(([key, value]) => (
          <View key={key} style={styles.fieldContainer}>
            <Text style={styles.keyText}>{key}:</Text>
            <Text style={styles.valueText}>{value}</Text>
          </View>
        ))}
      </View>
      <Button title="Submit" onPress={handleSubmit} color="#00408F" />
    </View>
  </ScrollView>
);
}

const styles = StyleSheet.create({
container: {
  padding: 10,
  flex: 1,
},
header: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 10,
  paddingTop: 30,
},
fieldContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 5,
},
keyText: {
  fontWeight: 'bold',
},
valueText: {
  flex: 1,
  textAlign: 'right',
},
headerContainer: {
  backgroundColor: '#00408F', // Example background color
  padding: 10,
  borderRadius: 1,
  marginHorizontal: -25,
  marginTop: -20,
},
card: {
  backgroundColor: '#FFFFFF',
  borderRadius: 8,
  padding: 15,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 2,
  marginBottom: 20,
},
});