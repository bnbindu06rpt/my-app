import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import RadioButton from '../../components/formComponents/customRadioButton';
import { SelectList } from 'react-native-dropdown-select-list';
import { router } from 'expo-router';
import { LogBox } from 'react-native';
import Header from '../../components/customComponents/header';
import { searchCustomerFormData } from '../../components/formComponents/formData';
import FormField from './forms/formField';
import { useForm } from 'react-hook-form';

const SearchScreen = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [noMatchFound, setNoMatchFound] = useState(false);
  const { control, handleSubmit, setError, formState: { errors }, reset } = useForm();
  const [showContinueButton, setShowContinueButton] = useState(false);

  useEffect(() => {
    // Reset the form fields when a new search option is selected
    reset();
  }, [selectedOption, reset]);

  const simulateApiCall = () => {
    return new Promise((resolve) => {
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

  const validateFields = async (data) => {
    let isValid = true;
    for (const field of searchCustomerFormData.elements[selectedOption]) {
      if (field.validation?.required && !data[field.name]) {
        isValid = false;
        setError(field.name, {
          type: 'manual',
          message: `${field.title} is required`
        });
      }
    }
    return isValid;
  };

  const handleSearch = async (data) => {
    try {
      setIsSearching(true);
      const isValid = await validateFields(data);
      if (isValid) {
        console.log('Form data:', data);
        const response = await simulateApiCall();
        console.log('Search results:', response.data);
        setIsSearching(false);
        if (response.data.data.length === 0) {
          // Handle no results found
          setShowContinueButton(true);
          setNoMatchFound(true);
        } else {
          // Handle search results
          setShowContinueButton(true);
        }
      } else {
        setIsSearching(false);
      }
    } catch (error) {
      console.error('Error:', error);
      setIsSearching(false);
    }
  };

  const handleContinue = () => {
    router.navigate('screens/forms/sqliteCustomerProvider');
  };

  const options = [
    { label: 'Customer ID', value: 'customerId' },
    { label: 'Customer Full Name', value: 'customerFullName' },
    { label: 'Mobile Number', value: 'mobileNumber' },
    { label: 'PAN', value: 'PAN' },
    { label: 'Proof of Address', value: 'proofOfAddress' },
    { label: 'CKYC Number', value: 'ckycNumber' },
  ];

  LogBox.ignoreAllLogs();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header backPath="screens/listOfApplications" />
        <View>
          <ScrollView>
            <Text style={styles.title}>Search Customer</Text>
            <Text style={styles.subtitle}>Select the required search option</Text>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Search Options</Text>
              <OptionRadioButtons selectedOption={selectedOption} onSelectOption={setSelectedOption} options={options} />
            </View>
            {selectedOption && (
              <View style={styles.card}>
                {searchCustomerFormData.elements[selectedOption].map((fieldConfig, index) => (
                  <FormField
                    key={index}
                    control={control}
                    name={fieldConfig.name}
                    type={fieldConfig.type}
                    title={fieldConfig.title}
                    placeholder={fieldConfig.placeholder}
                    validation={fieldConfig.validation}
                    dropdownData={fieldConfig.dropdownData}
                    radioData={fieldConfig.radioData}
                  />
                ))}
              </View>
            )}
            {errors && <Text style={styles.errorText}>{errors[selectedOption]?.message}</Text>}
            <View style={styles.searchButton}>
              <Button title="Search" onPress={handleSubmit(handleSearch)} disabled={isSearching} color='#00408F' />
            </View>
            {isSearching && <ActivityIndicator size="large" color="#0000ff" />}
            {/* Display no match found or continue button based on conditions */}
            {noMatchFound && <Text style={styles.noMatchText}>No match found</Text>}
            {showContinueButton && <Button title="Continue" onPress={handleContinue} color='#00408F' />}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

const OptionRadioButtons = ({ selectedOption, onSelectOption, options }) => (
  <View style={styles.radioButtonContainer}>
    <RadioButton
      onSelect={onSelectOption}
      radioButtonOptions={options}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 35,
    paddingVertical: 10,
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
  searchButton: {
    marginTop: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 2,
    color: 'black',
    textAlign: 'center',
    width: '90%',
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 4,
    color: 'black',
    textAlign: 'center',
    width: '90%',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    paddingLeft: 35
  },
  noMatchText: {
    color: 'red',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default SearchScreen;
