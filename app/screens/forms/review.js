import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import { useFormContext } from "../../formContext";
import { useFormDataStore } from '../../globalStore';
import Header from '../../../components/customComponents/header';
import { useSQLiteContext } from 'expo-sqlite/next';

export default function Review() {
  const { formData } = useFormContext();
  const { setFinalFormData } = useFormDataStore();
  const [customerData, setCustomerData] = useState([]);
  const off = useSQLiteContext();

  useEffect(() => {
    getData();
  }, [off]); // Ensure useEffect runs when off (SQLite context) changes

  async function getData() {
    try {
      const categoriesResult = await off.getAllAsync(
        `SELECT * FROM Customer;`
      );
      setCustomerData(categoriesResult);
      console.log("Customer Data:", categoriesResult);
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
          `INSERT INTO Customer (
              customer_type,
              product_options,
              applicant_type,
              number_of_applicants,
              mode_of_operation,
              address_line_1,
              address_line_2,
              address_line_3,
              address_type,
              alternate_email_id,
              email_id,
              alternate_mobile_number,
              district,
              marital_status,
              first_name,
              last_name,
              pincode,
              gender,
              middle_name,
              mother_name,
              father_name,
              state,
              place_of_birth
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
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
            formData.city,
            formData.district,
            formData.country,
            formData.first_name,
            formData.last_name,
            formData.pincode,
            formData.gender,
            formData.middle_name,
            formData.mother_name,
            formData.father_name,
            formData.state,
            formData.place_of_birth
          ]
        );
      });
      await getData();
      Alert.alert('Success');
    } catch (error) {
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
        <Header backPath="/screens/forms/addressDetailsForm" />
        <Text style={styles.header}>Final Form Data:</Text>
        {Object.entries(formData).map(([key, value]) => (
          <View key={key} style={styles.fieldContainer}>
            <Text style={styles.keyText}>{key}:</Text>
            <Text style={styles.valueText}>{value}</Text>
          </View>
        ))}
        <Button title="Submit" onPress={handleSubmit} color="#00408F" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingTop: 30
  },
  fieldContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  keyText: {
    fontWeight: 'bold',
    width: 150,
  },
  valueText: {
    flex: 1,
  },
});
