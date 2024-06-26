// import React from 'react';
// import { Controller } from 'react-hook-form';
// import { View, Text, TextInput } from 'react-native';

// const FormField = ({ control, name, type, title, placeholder, validation }) => {
//   const renderInput = (error, onBlur, onChange, value) => {
//     switch (type) {
//       case 'text':
//         return (
//           <TextInput
//             style={{ borderColor: error ? 'red' : 'black', borderWidth: 1, padding: 8 }}
//             onBlur={onBlur}
//             onChangeText={onChange}
//             value={value}
//             placeholder={placeholder}
//             keyboardType="default"
//           />
//         );
//       case 'email':
//         return (
//           <TextInput
//             style={{ borderColor: error ? 'red' : 'black', borderWidth: 1, padding: 8 }}
//             onBlur={onBlur}
//             onChangeText={onChange}
//             value={value}
//             placeholder={placeholder}
//             keyboardType="email-address"
//           />
//         );
//       case 'phone':
//         return (
//             <PhoneInput
//           defaultValue={phoneNumber}
//           defaultCode="IN"
//           layout="first"
//           onChangeText={text => {
//             setPhoneNumber(text);
//             onChange(text);
//           }}
//           onChangeFormattedText={onChange}
//           textContainerStyle={styles.phoneInput}
//           textInputStyle={styles.phoneTextInput}
//           containerStyle={styles.phoneContainer}
//           countryPickerProps={{
//             withFlag: true,
//             withFilter: true,
//             withCountryNameButton: true,
//             withAlphaFilter: true,
//             withCallingCode: true,
//           }}
//           placeholder={placeholder}
//         />
//         );
//         case 'Dropdown':
//             return(
//                 <View>
//                 <View style={styles.inputContainer}>
//                   <Text style={styles.label}>{element.title}{starMark}</Text>
//                   <SelectList
//                     boxStyles={{
//                       borderBottomWidth: 1,
//                       borderBottomColor: '#ccc',
//                       paddingVertical: 10,
//                       paddingHorizontal: 10,
//                       fontSize: 16,
//                       borderWidth: 0,
//                     }}
//                     setSelected={(label) => {
//                       setSelectedValue(label);
//                       handleInputChange(element.name, label);
//                     }}
//                     data={element.dropdownData.map(item => ({ value: item.key, label: item.value }))}
//                     save="value"
//                   />
//                 </View>
//               </View>
//             )
//         case 'RadioButton':
//             return (
//                 <View style={styles.inputContainer}>
//                 <Text style={styles.label}>{element.title}{starMark}</Text>
//                 <RadioButton
//                   onSelect={(item) => {
//                     setRadioSelect(item.value);
//                     handleInputChange(element.name, item.value);
//                   }}
//                   SelectedData={radioSelect}
//                   disableLine={1}
//                   value={radioSelect}
//                   data={element.radioData}
//                   title={element.title}
//                 />
//               </View>
//             )
    
//         case 'Date':
//             return(
//                 <View style={styles.inputContainer}>
//                 <Text style={styles.label}>{element.title}{starMark}</Text>
//                 <Pressable onPress={() => setShowCalendarModal(true)}>
//                   <View style={styles.dateInput}>
//                     <Text style={styles.dateText}>
//                       {formValues[element.name] ? extractDate(formValues[element.name]) : 'Select date '}
//                     </Text>
//                     <Ionicons name='calendar' size={20} color='black' style={styles.icon} />
//                   </View>
//                 </Pressable>
//                 {/* Calendar Modal */}
//                 {showCalendarModal && (
//                   <View>
//                     {/* <Text style={{ textAlign: 'center', color: 'grey', marginBottom: 10 }}>Person should be above 18 years</Text> */}
     
//                   <RNDateTimePicker
//                     value={selectedDate || new Date()}
//                     mode="date"
//                     display="default"
//                     onChange={(event, selectedDate) => handleDateChange(selectedDate, element)}
//                   />
//                     </View>
//                 )}
//                 {validationErrors[element.name] && <Text style={styles.errorMessage}>{validationErrors[element.name]}</Text>}
//               </View>
//             )
//       default:
//         return null;
//     }
//   };

//   return (
//     <Controller
//       control={control}
//       name={name}
//       rules={validation}
//       render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
//         <View>
//           <Text>{title}</Text>
//           {renderInput(error, onBlur, onChange, value)}
//           {error && <Text style={{ color: 'red' }}>{error.message}</Text>}
//         </View>
//       )}
//     />
//   );
// };

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#B3C9E7',
//     },
//     card: {
//       backgroundColor: '#FFFFFF',
//       borderRadius: 10,
//       padding: 10,
//       shadowColor: '#000000',
//       shadowOpacity: 0.2,
//       shadowRadius: 5,
//       elevation: 5,
//       marginBottom: 20,
//     },
//     scrollViewContainer: {
//       paddingBottom: 100, // Adjust padding to make space for the button
//     },
//     section: {
//       marginBottom: 20,
//     },
//     sectionTitle: {
//       fontSize: 20,
//       fontWeight: 'bold',
//       marginBottom: 15,
//       color: '#00408F',
//       paddingBottom: 5,
//     },
//     inputContainer: {
//       marginBottom: 8,
//     },
//     label: {
//       marginBottom: 3,
//       fontSize: 12,
//       fontWeight: 'bold',
//       color: '#00408F',
//     },
//     error: {
//       color: 'red',
//       marginBottom: 3,
//       fontSize: 12,
//     },
//     dropdownIcon: {
//       width: 20,
//       height: 20,
//       position: 'absolute',
//       right: 10,
//       top: 9,
//     },
//     dateInput: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       paddingVertical: 10,
//       paddingHorizontal: 15,
//       borderBottomWidth: 1,
//       borderBottomColor: '#ccc',
//     },
//     icon: {
//       marginLeft: 'auto', // Align the icon to the rightmost edge of its container
//     },
//     buttonContainer: {
//       position: 'absolute',
//       bottom: 0,
//       left: 0,
//       right: 0,
//       padding: 10,
//       backgroundColor: '#fff', // Add a background color to make the button stand out
//     },
//   });
   

// export default FormField;


import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View, Text, TextInput, StyleSheet, Pressable, Button } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import { SelectList } from 'react-native-dropdown-select-list';
import RadioButton from '../../../components/formComponents/customRadioButton';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import CustomInput from '../../../components/formComponents/customInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomCheckbox from '../../../components/formComponents/customCheckBox';
import { themeColor } from '../../../constants/constants';
import CheckNetwork from '../../../components/customComponents/checkNetwork';

const FormField = ({ control, name, type, title, placeholder, validation, dropdownData, radioData, handleCheckboxChange, networkConnect }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const validatePan=()=>{
    console.log()
  }

  const handleDateChange = (date, element) => {
    console.log(date);
    console.log("Inside handle date change")
    if (date) {
      setSelectedDate(date);
    //   control.setValue(date); // Use the element parameter to set the correct form field
      console.log(element, date);
    }
  };
  function extractDate(timestamp) {
    const dateObject = new Date(timestamp);
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const date = dateObject.getDate();
    const formattedDate = `${date < 10 ? '0' + date : date}-${month < 10 ? '0' + month : month}-${year}`;
    return formattedDate;
  }
 

  const renderInput = (error, onBlur, onChange, value) => {
    switch (type) {
      case 'TextInput':
        return (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
            keyboardType="default"
          />
        );
      case 'email':
        return (
          <TextInput
            style={{ borderColor: error ? 'red' : 'black', borderWidth: 1, padding: 8 }}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
            keyboardType="email-address"
          />
        );
      case 'phone':
        return (
          <PhoneInput
            defaultValue={phoneNumber}
            defaultCode="IN"
            layout="first"
            onChangeText={text => {
              setPhoneNumber(text);
              onChange(text);
            }}
            onChangeFormattedText={onChange}
            textContainerStyle={styles.phoneInput}
            textInputStyle={styles.phoneTextInput}
            containerStyle={styles.phoneContainer}
            countryPickerProps={{
              withFlag: true,
              withFilter: true,
              withCountryNameButton: true,
              withAlphaFilter: true,
              withCallingCode: true,
            }}
            placeholder={placeholder}
          />
        );
      case 'dropdown':
        return (
         
            <SelectList
              boxStyles={{
                borderBottomWidth: 1,
                borderBottomColor: 'red',
                paddingVertical: 10,
                paddingHorizontal: 10,
                fontSize: 16,
                borderWidth: 0,
              }}
              dropdownStyles={{
                paddingTop:-10,
              

              }}
              dropdownTextStyles={{

                marginBottom:-8,
                
              }}
              setSelected={label => onChange(label)}
              data={dropdownData.map(item => ({ value: item.key, label: item.value }))}
              save="value"
            />
        
        );
      case 'RadioButton':
        return (
          <View style={styles.inputContainer}>
            <RadioButton
              onSelect={item => onChange(item.value)}
              SelectedData={value}
              disableLine={1}
              value={value}
              radioButtonOptions={radioData}
              title={title}
            />
          </View>
        );
      case 'Date':
        return (
            <View style={styles.inputContainer}>
            <Pressable onPress={() => setShowCalendarModal(true)}>
              <View style={styles.dateInput}>
                <Text style={styles.dateText}>
                  {selectedDate ? extractDate(selectedDate) : 'Select date '}
                </Text>
                <Ionicons name='calendar' size={20} color='black' style={styles.icon} />
              </View>
            </Pressable>
            {showCalendarModal && (
              <RNDateTimePicker
                value={selectedDate || new Date()}
                mode="date"
                display="default"
                onChange={(event, selectedDate) => {
                  setShowCalendarModal(false);
                  handleDateChange(selectedDate, name);
                }}
              />
            )}
          </View>
        );
        case 'checkbox':
          return (
            <View style={styles.checkboxContainer}>
            <CustomCheckbox
              label={title}
              isChecked={value}
              onChange={onChange}
             handleCheckboxChange={handleCheckboxChange && handleCheckboxChange(name, newValue)}
            />
          </View>
        );
        case 'Button':
            return (
              
                    networkConnect && (
                      <View style={styles.checkboxContainer}>
                        <Button title='Validate PAN' color={themeColor} onPress={validatePan}></Button>
                      </View>
                    )
                
          );
          
 
      default:
        return null;
    }
  };

  return (
    <Controller
      control={control}
      name={name}
      rules={validation}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <View>
          <View>
          <Text style={styles.label}>
            {title} {validation?.required && <Text style={styles.asterisk}>*</Text>}
          </Text>
         
        </View>
          {renderInput(error, onBlur, onChange, value)}
          {error && <Text style={{ color: 'red' }}>{error.message}</Text>}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
    phoneInput: {
        paddingVertical: 7,
        paddingHorizontal: 10,
        fontSize: 12,
        flex: 1,
        backgroundColor:'white',
      },
      phoneTextInput: {
        fontSize: 12,
      },
      asterisk: {
        color: 'red',
      },
      label: {
        marginBottom: -4,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#00408F',
        paddingLeft:10,
        marginTop:13
      },
      phoneContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 10,
      },
 
  inputContainer: {
    marginBottom: 8,
    marginTop:3
  },
  dateInput: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  icon: {
    marginLeft: 'auto',
  },
  errorMessage: {
    color: 'red',
    marginTop: 5,
  },
  input:{
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 14,
    borderWidth: 0,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  }
  
});

export default FormField;
