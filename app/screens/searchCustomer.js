import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import RadioButton from '../../components/formComponents/customRadioButton';
import { SelectList } from 'react-native-dropdown-select-list';
import { router } from 'expo-router';
import { LogBox } from 'react-native';
import Header from '../../components/customComponents/header';
 
const SearchScreen = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [proofType, setProofType] = useState('');
  const [proofId, setProofId] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [selectedValue, setSelectedValue] = useState();
  const [errorMessage, setErrorMessage] = useState('');
  const [noMatchFound, setNoMatchFound] = useState(false);
  const [showContinueButton, setShowContinueButton] = useState(false);
 
  const simulateApiCall = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const response = {
          status: 200,
          data: {
            message: 'Success',
            data: [] // Simulating empty search results
          }
        };
        resolve(response);
      }, 2000);
    });
  };
 
  const validateFields = () => {
    if (!searchValue) {
      setErrorMessage('Search value is required');
      return false;
    }
    if (selectedOption === 'Customer Full Name' && !dateOfBirth) {
      setErrorMessage('Date of Birth is required');
      return false;
    }
    if (selectedOption === 'Proof of Address' && (!proofType || !proofId)) {
      setErrorMessage('Proof Type and Proof ID are required');
      return false;
    }
    setErrorMessage('');
    return true;
  };
 
  const handleSearch = async () => {
    if (!validateFields()) {
      return;
    }
    setIsSearching(true);
    setNoMatchFound(false); // Reset noMatchFound state
    setShowContinueButton(false); // Reset showContinueButton state
    console.log('Searching with:', selectedOption, searchValue, dateOfBirth, proofType, proofId);
    try {
      const response = await simulateApiCall();
      console.log('Search results:', response.data);
      if (response.data.data.length === 0) {
        setNoMatchFound(true);
        setShowContinueButton(true);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSearching(false);
    }
  };
 
  const handleContinue = () => {
    // Handle the continue action here
    router.navigate('screens/forms/sqliteCustomerProvider')
  };
 
  const options = [
    { label: 'Customer ID', value: 'customerId' },
    { label: 'Customer Full Name', value: 'customerFullName' },
    { label: 'Mobile Number', value: 'mobileNumber' },
    { label: 'PAN', value: 'PAN' },
    { label: 'Proof of Address', value: 'proofOfAddress' },
    { label: 'CKYC Number', value: 'ckycNumber' },
  ];
 
  const proofTypes = [
    { label: 'Aadhar', value: 'Aadhar' },
    { label: 'Driver’s License', value: 'Driver License' },
    { label: 'Job Contract', value: 'Job Contract' },
    { label: 'NREGA', value: 'NREGA' },
    { label: 'Passport', value: 'Passport' },
    { label: ' Voters ID Card', value: 'Voters ID Card' },
  ];
 
  LogBox.ignoreAllLogs();
 
  return (
    <ScrollView>
    <View style={styles.container}>
    <Header  backPath="screens/listOfApplications" />
    <View >
      <ScrollView>
        <Text style={styles.title}>Search Customer</Text>
        <Text style={styles.subtitle}>Select the required search option</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Search Options</Text>
          <OptionRadioButtons selectedOption={selectedOption} onSelectOption={setSelectedOption} options={options} />
        </View>
        {selectedOption && (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{selectedOption}</Text>
            <InputFields
              selectedOption={selectedOption}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              dateOfBirth={dateOfBirth}
              setDateOfBirth={setDateOfBirth}
              proofType={proofType}
              setProofType={setProofType}
              proofId={proofId}
              setProofId={setProofId}
              proofTypes={proofTypes}
            />
          </View>
        )}
        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
        <View style={styles.searchButton}><Button title="Search" onPress={handleSearch} disabled={isSearching} color='#00408F' /></View>
        
        {isSearching && <ActivityIndicator size="large" color="#0000ff" />}
        {noMatchFound && <Text style={styles.noMatchText}>No match found</Text>}
        {showContinueButton && <Button title="Continue" onPress={handleContinue} color='#00408F' />}
      </ScrollView>
    </View>
    </View>
    </ScrollView>
  );
};
 
const handleInputChange = (name) => {
  console.log(name);
};
 
const OptionRadioButtons = ({ selectedOption, onSelectOption, options }) => (
  <View style={styles.radioButtonContainer}>
    <RadioButton
      onSelect={onSelectOption}
      radioButtonOptions={options}
    />
  </View>
);
 
const InputFields = ({
  selectedOption,
  searchValue,
  setSearchValue,
  dateOfBirth,
  setDateOfBirth,
  proofType,
  setProofType,
  proofId,
  setProofId,
  proofTypes,
}) => (
  <View style={styles.inputContainer}>
    {selectedOption === 'Customer Full Name' ? (
      <>
        <TextInput
          style={styles.input}
          placeholder="Enter Customer Name"
          value={searchValue}
          onChangeText={setSearchValue}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Date of Birth (YYYY-MM-DD)"
          value={dateOfBirth}
          onChangeText={setDateOfBirth}
        />
      </>
    ) : selectedOption === 'Proof of Address' ? (
      <>
        <SelectList
          boxStyles={{
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
            paddingVertical: 10,
            paddingHorizontal: 10,
            fontSize: 16,
            borderWidth: 0,
            marginBottom: 20,
          }}
          setSelected={(label) => {
            handleInputChange(label);
          }}
          data={proofTypes}
          save="label"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Proof ID"
          value={proofId}
          onChangeText={setProofId}
        />
      </>
    ) : (
      <TextInput
        style={styles.input}
        placeholder={`Enter ${selectedOption.replace(/([A-Z])/g, '$1').toLowerCase()}`}
        value={searchValue}
        onChangeText={setSearchValue}
      />
    )}
  </View>
);
 
const styles = StyleSheet.create({
 
    mainContainer: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
 
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 35,
    paddingVertical:10,
    marginBottom: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,

    },
    searchButton:{
      marginTop:20

    },
    title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10, // Added space below the header
    marginBottom: 2,
    color: 'black',
    textAlign: 'center', // Center-align text
    width: '90%', // Adjust width to center within the screen
    },
    subtitle: {
    fontSize: 14,
    marginBottom: 4,
    color: 'black',
    textAlign: 'center', // Center-align text
    width: '90%', // Adjust width to center within the screen
    },
    radioButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    },
    inputContainer: {
    marginTop: 10,
    },
    input: {
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      paddingVertical: 10,
      paddingHorizontal: 10,
      fontSize: 14,
      borderWidth: 0,
    },
    errorText: {
    color: 'red',
    marginBottom: 10,
    },
    noMatchText: {
    color: 'red',
    marginTop: 10,
    marginBottom: 10,
    },
    });
   
    export default SearchScreen;
 