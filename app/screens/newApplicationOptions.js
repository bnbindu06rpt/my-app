import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { BranchKyc, AadhaarEkyc } from '../../assets/images/assets';
import { router } from 'expo-router';
import Header from '../../components/customComponents/header';
import { useEffect } from 'react';
 
const NewApplicationOptionsScreen = () => {
    const goToApplicantsList = () => {
      router.navigate('screens/applicantsList');
    };
 
    const goToCustType = () => {
      router.navigate('screens/searchCustomer');
    };
 
    return (
      <View style={styles.container}>
        <View style={styles.headerbox}>
          <Header backPath="screens/listOfApplications" />
        </View>
        <Text style={styles.title}>Create New Application</Text>
        <Text style={styles.subtitle}>Select your required account creation option</Text>
 
        <View style={styles.optionContainer}>
          <View style={styles.option}>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>Account On-boarding</Text>
              <Text style={styles.optionDescription}>
                To open a specific account with the bank
              </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={goToCustType}>
              <Text style={styles.buttonText}>CHOOSE & CONTINUE</Text>
            </TouchableOpacity>
          </View>
        </View>
 
        <View style={styles.optionContainer}>
          <View style={styles.option}>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>Client Creation or Updation</Text>
              <Text style={styles.optionDescription}>
                To create a new client within the bank
              </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={goToCustType}>
              <Text style={styles.buttonText}>CHOOSE & CONTINUE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 5,
      backgroundColor: '#EFF9FF',
      alignItems: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 10,
      color: 'black',
      textAlign: 'center',
      width: '90%',
    },
    subtitle: {
      fontSize: 14,
      marginBottom: 30,
      color: 'black',
      textAlign: 'center',
      width: '90%',
    },
    optionContainer: {
      backgroundColor: 'white',
      borderRadius: 10,
      marginHorizontal: 20,
      marginBottom: 20,
      shadowColor: '#000',
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 3,
      alignItems: 'center',
      height: 180,
      width: 300,
    },
    option: {
      borderRadius: 10,
      padding: 30,
    },
    optionTextContainer: {
      alignItems: 'center',
    },
    optionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
      color: '#003366',
      textAlign: 'center',
    },
    optionDescription: {
      fontSize: 14,
      color: '#666666',
      textAlign: 'center',
    },
    button: {
      marginTop: 17,
      backgroundColor: '#00408F',
      paddingVertical: 7,
      paddingHorizontal: 10,
      borderRadius: 5,
      alignItems: 'center',
    },
    buttonText: {
      color: '#FFFFFF',
      fontWeight: 'bold',
      fontSize: 14,
    },
  });
 
  export default NewApplicationOptionsScreen;