import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Button, Pressable, LogBox } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import Collapsible from 'react-native-collapsible';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import CustomInput from '../../../components/formComponents/customInput';
import RadioButton from '../../../components/formComponents/customRadioButton';
import { profileDetailsFormData } from '../../../components/formComponents/formData';
import { themeColor } from '../../../constants/constants';
import { DropdownIcon, DropupIcon } from '../../../assets/images/assets';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import Header from '../../../components/customComponents/header';
import Form from './form';
import CheckNetwork from '../../../components/customComponents/checkNetwork';
import { useNetInfo } from '@react-native-community/netinfo';
 
export default function ProfileDetailsForm() {
  const [validationErrors, setValidationErrors] = useState({});
  const [formValues, setFormValues] = useState({});
  const [selectedValue, setSelectedValue] = useState(null);
  const [radioSelect, setRadioSelect] = useState(null);
  const [renderFormData, setRenderFormData] = useState(profileDetailsFormData || { elements: [] });
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [isCollapsed, setIsCollapsed] = useState({
    'Profile Details': false,
  });
 
  console.disableYellowBox = true;
  const [networkConnect, setNetworkConnect] = useState(false);
 
  const toggleSection = (section) => {
    setIsCollapsed({ ...isCollapsed, [section]: !isCollapsed[section] });
  };

  
 
  const onSubmit = async () => {
   // const errors = validateForm();
    // if (Object.keys(errors).length > 0) {
    //   setValidationErrors(errors);
    // } else {
        router.navigate('screens/forms/nomineeDetailForm')
      try {
        console.log('Form data', formValues);
        router.navigate('screens/forms/nomineeDetailForm')
      } catch (err) {
        console.log('error', err);
      }
    
  };
  const netInfo = useNetInfo();

  useEffect(() => {
      if (netInfo) {
          setNetworkConnect(netInfo.isConnected);
      }
  }, [netInfo]);   

 console.log(networkConnect,"network stats")

 

 
  return (
    <View style={styles.container}>
      <Header backPath="screens/forms/addressDetailsForm" />
      <CheckNetwork onNetworkChange={setNetworkConnect} />
      <Form elements={profileDetailsFormData.elements} onSubmit={onSubmit} networkConnect={networkConnect}/>
      {/* <ScrollView contentContainerStyle={styles.scrollViewContainer}>
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
      </View> */}
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