import React, { useState,useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Button, Pressable, LogBox, Alert } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import Collapsible from 'react-native-collapsible';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import CustomInput from '../../../components/formComponents/customInput';
import Dropdown from '../../../components/formComponents/dropdown';
import RadioButton from '../../../components/formComponents/customRadioButton';
import { personalDetailsFormData } from '../../../components/formComponents/formData';
import { themeColor } from '../../../constants/constants';
import { DropdownIcon, DropupIcon } from '../../../assets/images/assets';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import Header from '../../../components/customComponents/header';
import { useFormContext } from '../../formContext';
import useIdStore from '../../globalStore';
import { useSQLiteContext } from 'expo-sqlite/next';
 
export default function PersonalDetailsForm() {
  const [validationErrors, setValidationErrors] = useState({});
  const { formData } = useFormContext();
  const [formValues, setFormValues] = useState({});
  const [selectedValue, setSelectedValue] = useState(null);
  const [radioSelect, setRadioSelect] = useState(null);
  const [renderFormData, setRenderFormData] = useState(personalDetailsFormData || { elements: [] });
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [isCollapsed, setIsCollapsed] = useState({
    'Personal Details': false,
  });
  const { updateFormData } = useFormContext();
  const uuid = useIdStore((state) => state.uuid); 
  console.log(uuid,"uuid number")
  const off = useSQLiteContext();
 
  console.disableYellowBox = true;
  //console.log("this if formdata from previous formmmmmm", formData)
 
  const toggleSection = (section) => {
    setIsCollapsed({ ...isCollapsed, [section]: !isCollapsed[section] });
  };

  function extractDate(timestamp) {
    const dateObject = new Date(timestamp);
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const date = dateObject.getDate();
    const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${date < 10 ? '0' + date : date}`;
    return formattedDate;
  }
 

  const handleDateChange = (selectedDate, element) => {
    if (selectedDate) {
      const selectedTimestamp = selectedDate.getTime(); // Convert date to timestamp
      const eighteenYearsAgo = new Date();
      eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18); // Calculate date 18 years ago
 
      // Check if selected date is at least 18 years ago
      if (selectedTimestamp > eighteenYearsAgo.getTime()) {
        // Date is invalid (person is less than 18 years old)
        // You may want to show an error message or prevent further action
        console.log("Selected date is less than 18 years");
        // For example:
        setValidationErrors(prevErrors => ({
          ...prevErrors,
          [element.name]: "Date of birth should be at least 18 years"
        }));
        return;
      }
 
      // Date is valid
      setShowCalendarModal(false);
      console.log("Selected Date:", selectedDate);
      console.log("Extracted Date:", extractDate(selectedDate));
      if (element.name === 'dob') {
        setFormValues(prevFormValues => ({ ...prevFormValues, ['dob']: extractDate(selectedDate) }));
      }
      setFormValues(prevFormValues => ({ ...prevFormValues, [element.name]: extractDate(selectedDate) }));
      console.log("Updated Form Values:", formValues); // Log the updated formValues
      setValidationErrors(prevErrors => ({ ...prevErrors, [element.name]: null })); // Clear validation error
    }
  }
 

    useEffect(() => {
      setFormValues(formData);
    }, [formData]);
  
  const onSubmit = async () => {
    const errors = validateForm();
    // if (Object.keys(errors).length > 0) {
    //   setValidationErrors(errors);
    // } else {
      try {
        console.log('Form data', formValues);
        updateFormData(formValues);
        await off.withTransactionAsync(async (tx) => {
          await off.runAsync(
              `UPDATE Customerss
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
    //}
  };
 
  const validateForm = () => {
    const errors = {};
    if (renderFormData && renderFormData.elements) {
      renderFormData.elements.forEach((element) => {
        if (element.isRequired && !formValues[element.name]) {
          errors[element.name] = `${element.title} is required`;
        }
        if (element.validation && element.validation.regex && !element.validation.regex.test(formValues[element.name])) {
          errors[element.name] = element.validation.message;
        }
      });
    }
    return errors;
  };
  LogBox.ignoreAllLogs();
  const handleInputChange = (name, value) => {
    setFormValues((prevFormValues) => {
      const updatedFormValues = { ...prevFormValues, [name]: value };
 
      // Perform dynamic validation for the changed field
      const errors = { ...validationErrors };
      const element = renderFormData.elements.find((el) => el.name === name);
 
      if (element) {
        if (element.isRequired && !value) {
          errors[name] = `${element.title} is required`;
        } else if (element.validation && element.validation.regex && !element.validation.regex.test(value)) {
          errors[name] = element.validation.message;
        } else {
          delete errors[name]; // Remove the error message if input is valid
        }
      }
 
      setValidationErrors(errors);
      return updatedFormValues;
    });
  };
 
  const renderFormElements = (section) => {
    if (renderFormData && renderFormData.elements) {
      return renderFormData.elements
        .filter((element) => element.section === section)
        .sort((a, b) => a.order - b.order)
        .map((element, index) => (
          <View key={index} style={styles.formElement}>
            {renderFormElement(element)}
            {validationErrors[element.name] && <Text style={styles.error}>{validationErrors[element.name]}</Text>}
          </View>
        ));
    }
    return null;
  };
 
  const renderFormElement = (element) => {
    const starMark = element.isRequired ? <Text style={{ color: 'red' }}> *</Text> : null;
 
    switch (element.type) {
      case 'TextInput':
        return (
          <View>
            <CustomInput
              key={element.name}
              title={element.title + (element.isRequired ? '' : '')}
              placeholder={element.placeholder}
              isRequired={element.isRequired}
              inputType={element.inputType}
              name={element.name}
              onChange={(value) => handleInputChange(element.name, value)}
              value={formValues[element.name] || ''}
            />
          </View>
        );
 
      case 'dropdown':
        return (
          <View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>{element.title}{starMark}</Text>
              <SelectList
                boxStyles={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#ccc',
                  paddingVertical: 10,
                  paddingHorizontal: 10,
                  fontSize: 16,
                  borderWidth: 0,
                }}
                setSelected={(label) => {
                  setSelectedValue(label);
                  handleInputChange(element.name, label);
                }}
                data={element.dropdownData.map(item => ({ value: item.key, label: item.value }))}
                save="value"
              />
            </View>
          </View>
        );
 
      case 'RadioButton':
        return (
          <View style={styles.inputContainer}>
            <Text style={styles.label}>{element.title}{starMark}</Text>
            <RadioButton
              onSelect={(item) => {
                setRadioSelect(item.value);
                handleInputChange(element.name, item.value);
              }}
              SelectedData={radioSelect}
              disableLine={1}
              value={radioSelect}
              data={element.radioData}
              title={element.title}
            />
          </View>
        );
 
      case 'Date':
        return (
          <View style={styles.inputContainer}>
            <Text style={styles.label}>{element.title}{starMark}</Text>
            <Pressable onPress={() => setShowCalendarModal(true)}>
              <View style={styles.dateInput}>
                <Text style={styles.dateText}>
                  {formValues[element.name] ? extractDate(formValues[element.name]) : 'Select date '}
                </Text>
                <Ionicons name='calendar' size={20} color='black' style={styles.icon} />
              </View>
            </Pressable>
            {/* Calendar Modal */}
            {showCalendarModal && (
              <View>
                {/* <Text style={{ textAlign: 'center', color: 'grey', marginBottom: 10 }}>Person should be above 18 years</Text> */}
 
              <RNDateTimePicker
                value={selectedDate || new Date()}
                mode="date"
                display="default"
                onChange={(event, selectedDate) => handleDateChange(selectedDate, element)}
              />
                </View>
            )}
            {validationErrors[element.name] && <Text style={styles.errorMessage}>{validationErrors[element.name]}</Text>}
          </View>
        );
 
      default:
        return null;
    }
  };
 
  return (
    <View style={styles.container}>
      <Header backPath="screens/forms/sqliteCustomerProvider" />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.card}>
          <View style={styles.section}>
            {Object.keys(isCollapsed).map((section, index) => (
              <View key={index} style={styles.sectionContainer}>
                <TouchableOpacity onPress={() => toggleSection(section)}>
                  <Text style={styles.sectionTitle}>{section}</Text>
                  <Image
                    source={isCollapsed[section] ? DropdownIcon : DropupIcon}
                    resizeMode="contain"
                    style={styles.dropdownIcon}
                  />
                </TouchableOpacity>
                <Collapsible collapsed={isCollapsed[section]}>
                  {renderFormElements(section)}
                </Collapsible>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button title="Save and Continue" onPress={onSubmit} color={themeColor} />
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B3C9E7',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 20,
  },
  scrollViewContainer: {
    paddingBottom: 100, // Adjust padding to make space for the button
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#00408F',
    paddingBottom: 5,
  },
  inputContainer: {
    marginBottom: 8,
  },
  label: {
    marginBottom: 3,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#00408F',
  },
  error: {
    color: 'red',
    marginBottom: 3,
    fontSize: 12,
  },
  dropdownIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 10,
    top: 9,
  },
  dateInput: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  icon: {
    marginLeft: 'auto', // Align the icon to the rightmost edge of its container
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: '#fff', // Add a background color to make the button stand out
  },
});
 
 
 
 
 



