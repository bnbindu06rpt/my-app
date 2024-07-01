// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet, Alert } from 'react-native';
// import { router } from 'expo-router';
// import { residentAddressFormData } from '../../../components/formJsonData/residentAddressJson';
// import { nriAddressFormData } from '../../../components/formJsonData/nriAddressJson';
// import Header from '../../../components/customComponents/header';
// import { useFormContext } from '../../formContext';
// import useIdStore from '../../globalStore';
// import { useSQLiteContext } from 'expo-sqlite/next';
// import Form from './form';
 
// export default function AddressDetailsForm() {
//   const { formData } = useFormContext();
//   console.log('Previous form values', formData);
//   const [formValues, setFormValues] = useState({});
//   const { updateFormData } = useFormContext();
//   const [jsonData, setJsonData] = useState(null);
//   const uuid = useIdStore((state) => state.uuid);
//   console.log(uuid, "uuid number");
//   const off = useSQLiteContext();
 
//   console.disableYellowBox = true;
 
//   useEffect(() => {
//     setFormValues(formData);
//   }, [formData]);
 
//   useEffect(() => {
//     if (formData.customer_type === "Resident") {
//       setJsonData(residentAddressFormData);
//     } else if (formData.customer_type === "NRI" || formData.customer_type === 'PRO'|| formData.customer_type=='Foreigner') {
//       setJsonData(nriAddressFormData);
//     }
//   }, [formData.customer_type]);
 
//   console.log("form json data", jsonData, formData.customer_type);
 
//   const onSubmit = async () => {
//     try {
//       console.log('Form data', formValues);
//       updateFormData(formValues);
//       await off.withTransactionAsync(async (tx) => {
//         await off.runAsync(
//           `UPDATE Customerss
//            SET
//             customer_type = ?,
//             product_options = ?,
//             applicant_type = ?,
//             number_of_applicants = ?,
//             primary_holder_dob = ?,
//             mode_of_operation = ?,
//             middle_name = ?,r
//             first_name = ?,
//             last_name = ?,
//             gender = ?,
//             date_of_birth = ?,
//             place_of_birth = ?,
//             mother_name = ?,
//             father_name = ?,
//             primary_mobile_number = ?,
//             alternate_mobile_number = ?,
//             email_id = ?,
//             alternate_email_id = ?,
//             marital_status = ?
//            WHERE uuid = ?;`,
//           [
//             formValues.customer_type,
//             formValues.product_options,
//             formValues.applicant_type,
//             formValues.number_of_applicants,
//             formValues.primary_holder_dob,
//             formValues.mode_of_operation,
//             formValues.middle_name,
//             formValues.first_name,
//             formValues.last_name,
//             formValues.gender,
//             formValues.date_of_birth,
//             formValues.place_of_birth,
//             formValues.mother_name,
//             formValues.father_name,
//             formValues.primary_mobile_number,
//             formValues.alternate_mobile_number,
//             formValues.email_id,
//             formValues.alternate_email_id,
//             formValues.marital_status,
//             uuid // Replace with the actual uid value
//           ]
//         );
//       });
//       Alert.alert("Success");
//       router.navigate('screens/forms/profileDetailsForm');
//     } catch (err) {
//       console.log('error', err);
//       router.navigate('screens/forms/profileDetailsForm');
//     }
//   };
 
//   return (
//     <View style={styles.container}>
//       <Header backPath="screens/forms/personalDetailsForm" />
//       {jsonData && <Form elements={jsonData.elements} onSubmit={onSubmit} />}
//     </View>
//   );
// }
 
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#B3C9E7',
//   }
// });
//------half working code------------
// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet, Alert, TextInput, Text, Button, TouchableOpacity, ScrollView } from 'react-native';
// import { useForm, Controller } from 'react-hook-form';
// import { router } from 'expo-router';
// import { residentAddressFormData } from '../../../components/formJsonData/residentAddressJson';
// import { nriAddressFormData } from '../../../components/formJsonData/nriAddressJson';
// import Header from '../../../components/customComponents/header';
// import { useFormContext } from '../../formContext';
// import useIdStore from '../../globalStore';
// import { useSQLiteContext } from 'expo-sqlite/next';
// import { SelectList } from 'react-native-dropdown-select-list';

// export default function AddressDetailsForm() {
//   const { formData } = useFormContext();
//   const { updateFormData } = useFormContext();
//   const [jsonData, setJsonData] = useState(null);
//   const uuid = useIdStore((state) => state.uuid);
//   const off = useSQLiteContext();
//   const { control, handleSubmit, setValue, watch } = useForm({ defaultValues: formData });

//   const watchCustomerType = watch('customer_type');

//   console.disableYellowBox = true;

//   useEffect(() => {
//     if (watchCustomerType === "Resident") {
//       setJsonData(residentAddressFormData);
//     } else if (watchCustomerType === "NRI" || watchCustomerType === 'PRO' || watchCustomerType === 'Foreigner') {
//       setJsonData(nriAddressFormData);
//     }
//   }, [watchCustomerType]);

//   const handleCheckboxChange = (name, value) => {
//     if (name === "communication_same_as_permanent_address" && value) {
//       setValue("communication_address_line_1", watch("permanent_address_line_1"));
//       setValue("communication_address_line_2", watch("permanent_address_line_2"));
//       setValue("communication_address_line_3", watch("permanent_address_line_3"));
//       setValue("communication_pincode", watch("permanent_pincode"));
//       setValue("communication_district", watch("permanent_district"));
//       setValue("communication_state", watch("permanent_state"));
//       setValue("communication_country", watch("permanent_country"));
//     }

//     if (name === 'communication_same_as_overseas_address' && value) {
//       setValue("communication_address_line_1", watch("overseas_address_line_1"));
//       setValue("communication_address_line_2", watch("overseas_address_line_2"));
//       setValue("communication_address_line_3", watch("overseas_address_line_3"));
//       setValue("communication_pincode", watch("overseas_pincode"));
//       setValue("communication_district", watch("overseas_district"));
//       setValue("communication_state", watch("overseas_state"));
//       setValue("communication_country", watch("overseas_country"));
//     }
//   };

//   const onSubmit = async (data) => {
//     try {
//       updateFormData(data);
//       await off.withTransactionAsync(async (tx) => {
//         await off.runAsync(
//           `UPDATE Customerss
//            SET
//             customer_type = ?,
//             product_options = ?,
//             applicant_type = ?,
//             number_of_applicants = ?,
//             primary_holder_dob = ?,
//             mode_of_operation = ?,
//             middle_name = ?,
//             first_name = ?,
//             last_name = ?,
//             gender = ?,
//             date_of_birth = ?,
//             place_of_birth = ?,
//             mother_name = ?,
//             father_name = ?,
//             primary_mobile_number = ?,
//             alternate_mobile_number = ?,
//             email_id = ?,
//             alternate_email_id = ?,
//             marital_status = ?,
//             permanent_address_line_1 = ?,
//             permanent_address_line_2 = ?,
//             permanent_address_line_3 = ?,
//             permanent_pincode = ?,
//             permanent_district = ?,
//             permanent_state = ?,
//             permanent_country = ?,
//             overseas_address_line_1 = ?,
//             overseas_address_line_2 = ?,
//             overseas_address_line_3 = ?,
//             overseas_pincode = ?,
//             overseas_district = ?,
//             overseas_state = ?,
//             overseas_country = ?,
//             communication_address_line_1 = ?,
//             communication_address_line_2 = ?,
//             communication_address_line_3 = ?,
//             communication_pincode = ?,
//             communication_district = ?,
//             communication_state = ?,
//             communication_country = ?
//            WHERE uuid = ?;`,
//           [
//             data.customer_type,
//             data.product_options,
//             data.applicant_type,
//             data.number_of_applicants,
//             data.primary_holder_dob,
//             data.mode_of_operation,
//             data.middle_name,
//             data.first_name,
//             data.last_name,
//             data.gender,
//             data.date_of_birth,
//             data.place_of_birth,
//             data.mother_name,
//             data.father_name,
//             data.primary_mobile_number,
//             data.alternate_mobile_number,
//             data.email_id,
//             data.alternate_email_id,
//             data.marital_status,
//             data.permanent_address_line_1,
//             data.permanent_address_line_2,
//             data.permanent_address_line_3,
//             data.permanent_pincode,
//             data.permanent_district,
//             data.permanent_state,
//             data.permanent_country,
//             data.overseas_address_line_1,
//             data.overseas_address_line_2,
//             data.overseas_address_line_3,
//             data.overseas_pincode,
//             data.overseas_district,
//             data.overseas_state,
//             data.overseas_country,
//             data.communication_address_line_1,
//             data.communication_address_line_2,
//             data.communication_address_line_3,
//             data.communication_pincode,
//             data.communication_district,
//             data.communication_state,
//             data.communication_country,
//             uuid // Replace with the actual uuid value
//           ]
//         );
//       });
//       Alert.alert("Success");
//       router.navigate('screens/forms/profileDetailsForm');
//     } catch (err) {
//       console.log('error', err);
//       router.navigate('screens/forms/profileDetailsForm');
//     }
//   };

//   const FormField = ({ name, type, title, placeholder, dropdownData }) => {
//     return (
//       <Controller
//         control={control}
//         name={name}
//         render={({ field: { onChange, onBlur, value } }) => {
//           switch (type) {
//             case 'TextInput':
//               return (
//                 <View>
//                   <Text style={styles.label}>{title}</Text>
//                   <View style={styles.input}> 
//                   <TextInput
//                     placeholder={placeholder}
//                     onBlur={onBlur}
//                     onChangeText={onChange}
//                     value={value}
//                   />
//                   </View>
//                 </View>
//               );
//             case 'dropdown':
//               return (
//                 <View>
//                   <Text style={styles.label}>{title}</Text>
//                   <SelectList
//                     boxStyles={{
//                       borderBottomWidth: 1,
//                       borderBottomColor: 'red',
//                       paddingVertical: 10,
//                       paddingHorizontal: 10,
//                       fontSize: 16,
//                       borderWidth: 0,
//                     }}
//                     dropdownStyles={{
//                       paddingTop: -10,
//                     }}
//                     dropdownTextStyles={{
//                       marginBottom: -8,
//                     }}
//                     setSelected={label => onChange(label)}
//                     data={dropdownData.map(item => ({ value: item.key, label: item.value }))}
//                     save="value"
//                   />
//                 </View>
//               );
//             case 'checkbox':
//               return (
//                 <View style={styles.checkboxContainer}>
//                   <TouchableOpacity onPress={() => {
//                     const newValue = !value;
//                     onChange(newValue);
//                     handleCheckboxChange(name, newValue);
//                   }}>
//                     <View style={[styles.checkbox, value && styles.checked]}>
//                       {value && <Text style={styles.checkmark}>✓</Text>}
//                     </View>
//                   </TouchableOpacity>
//                   <Text style={styles.label}>{title}</Text>
//                 </View>
//               );
//             default:
//               return null;
//           }
//         }}
//       />
//     );
//   };

//   return (
//     <ScrollView>
//     <View style={styles.container}>
//       <Header backPath="screens/forms/personalDetailsForm" />
//       {jsonData && (
//         <View>
//           {jsonData.elements.map(element => (
//             <FormField
//               key={element.name}
//               name={element.name}
//               type={element.type}
//               title={element.title}
//               placeholder={element.placeholder}
//               dropdownData={element.dropdownData}
//             />
//           ))}
//           <Button title="Submit" onPress={handleSubmit(onSubmit)} />
//         </View>
//       )}
//     </View>
//     </ScrollView>
//   );
// }



// const styles = StyleSheet.create({
//   input:{
//     borderBottomWidth: 1,
//     borderBottomColor: 'black',
//     paddingVertical: 10,
//     paddingHorizontal: 10,
//     fontSize: 14,
//     borderWidth: 0,

//   },
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   checkboxContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   label: {
//     marginBottom: -4,
//     fontSize: 12,
//     fontWeight: 'bold',
//     color: '#00408F',
//     paddingLeft:10,
//     marginTop:13
//   },
//   checkbox: {
//     width: 20,
//     height: 20,
//     borderWidth: 1,
//     borderColor: '#000',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   checked: {
//     backgroundColor: '#000',
//   },
//   checkmark: {
//     color: '#fff',
//     fontSize: 14,
//   },
//   label: {
//     marginLeft: 8,
//   },
//   phoneInput: {
//     paddingVertical: 7,
//     paddingHorizontal: 10,
//     fontSize: 12,
//     flex: 1,
//     backgroundColor:'white',
//   },
//   phoneTextInput: {
//     fontSize: 12,
//   },
//   asterisk: {
//     color: 'red',
//   },
//   label: {
//     marginBottom: -4,
//     fontSize: 12,
//     fontWeight: 'bold',
//     color: '#00408F',
//     paddingLeft:10,
//     marginTop:13
//   },
//   phoneContainer: {
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     marginBottom: 10,
//   },

// inputContainer: {
// marginBottom: 8,
// marginTop:3
// },
// dateInput: {
// flexDirection: 'row',
// alignItems: 'center',
// paddingVertical: 10,
// paddingHorizontal: 15,
// borderBottomWidth: 1,
// borderBottomColor: 'black',
// },
// icon: {
// marginLeft: 'auto',
// },
// errorMessage: {
// color: 'red',
// marginTop: 5,
// },
// input:{
// borderBottomWidth: 1,
// borderBottomColor: 'black',
// paddingVertical: 10,
// paddingHorizontal: 10,
// fontSize: 14,
// borderWidth: 0,
// },
// checkboxContainer: {
// flexDirection: 'row',
// alignItems: 'center',
// marginVertical: 8,
// }
// });



import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, TextInput, Text, Button, TouchableOpacity, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { router } from 'expo-router';
import { residentAddressFormData } from '../../../components/formJsonData/residentAddressJson';
import { nriAddressFormData } from '../../../components/formJsonData/nriAddressJson';
import Header from '../../../components/customComponents/header';
import { useFormContext } from '../../formContext';
import RadioButton from '../../../components/formComponents/customRadioButton';
import useIdStore from '../../globalStore';
import { useSQLiteContext } from 'expo-sqlite/next';
import { SelectList } from 'react-native-dropdown-select-list';
import { DropdownIcon, DropupIcon } from '../../../assets/images/assets';
import { Ionicons } from '@expo/vector-icons';
import { themeColor } from '../../../constants/constants';

export default function AddressDetailsForm() {
  const { formData } = useFormContext();
  const { updateFormData } = useFormContext();
  const [jsonData, setJsonData] = useState(null);
  const uuid = useIdStore((state) => state.uuid);
  const off = useSQLiteContext();
  const { control, handleSubmit, setValue, watch } = useForm({ defaultValues: formData });
  const [collapsedSections, setCollapsedSections] = useState({});
  const watchCustomerType = watch('customer_type');

  console.disableYellowBox = true;

  useEffect(() => {
    if (formData.customer_type === "Resident") {
      setJsonData(residentAddressFormData);
    } else if (formData.customer_type === "NRI" || formData.customer_type === 'PRO' || formData.customer_type === 'Foreigner') {
      setJsonData(nriAddressFormData);
    }
  }, [watchCustomerType]);

  useEffect(() => {
    if (jsonData) {
      const groupedElements = jsonData.elements.reduce((acc, field) => {
        const section = field.section || 'General';
        if (!acc[section]) {
          acc[section] = [];
        }
        acc[section].push(field);
        return acc;
      }, {});

      const initialCollapsedState = Object.keys(groupedElements).reduce((acc, sectionName, index) => {
        acc[sectionName] = index !== 0;
        return acc;
      }, {});

      setCollapsedSections(initialCollapsedState);
    }
  }, [jsonData]);

  const toggleSection = (section) => {
    setCollapsedSections({
      ...collapsedSections,
      [section]: !collapsedSections[section],
    });
  };

  const handleCheckboxChange = (name, value) => {
    if (name === "communication_same_as_permanent_address" && value) {
      setValue("communication_address_line_1", watch("permanent_address_line_1"));
      setValue("communication_address_line_2", watch("permanent_address_line_2"));
      setValue("communication_address_line_3", watch("permanent_address_line_3"));
      setValue("communication_pincode", watch("permanent_pincode"));
      setValue("communication_district", watch("permanent_district"));
      setValue("communication_state", watch("permanent_state"));
      setValue("communication_country", watch("permanent_country"));
    }

    if (name === 'communication_same_as_overseas_address' && value) {
      setValue("communication_address_line_1", watch("overseas_address_line_1"));
      setValue("communication_address_line_2", watch("overseas_address_line_2"));
      setValue("communication_address_line_3", watch("overseas_address_line_3"));
      setValue("communication_pincode", watch("overseas_pincode"));
      setValue("communication_district", watch("overseas_district"));
      setValue("communication_state", watch("overseas_state"));
      setValue("communication_country", watch("overseas_country"));
    }
  };

  const onSubmit = async (data) => {
    router.navigate('screens/forms/profileDetailsForm');
    try {
      updateFormData(data);
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
            marital_status = ?,
            permanent_address_line_1 = ?,
            permanent_address_line_2 = ?,
            permanent_address_line_3 = ?,
            permanent_pincode = ?,
            permanent_district = ?,
            permanent_state = ?,
            permanent_country = ?,
            overseas_address_line_1 = ?,
            overseas_address_line_2 = ?,
            overseas_address_line_3 = ?,
            overseas_pincode = ?,
            overseas_district = ?,
            overseas_state = ?,
            overseas_country = ?,
            communication_address_line_1 = ?,
            communication_address_line_2 = ?,
            communication_address_line_3 = ?,
            communication_pincode = ?,
            communication_district = ?,
            communication_state = ?,
            communication_country = ?
           WHERE uuid = ?;`,
          [
            data.customer_type,
            data.product_options,
            data.applicant_type,
            data.number_of_applicants,
            data.primary_holder_dob,
            data.mode_of_operation,
            data.middle_name,
            data.first_name,
            data.last_name,
            data.gender,
            data.date_of_birth,
            data.place_of_birth,
            data.mother_name,
            data.father_name,
            data.primary_mobile_number,
            data.alternate_mobile_number,
            data.email_id,
            data.alternate_email_id,
            data.marital_status,
            data.permanent_address_line_1,
            data.permanent_address_line_2,
            data.permanent_address_line_3,
            data.permanent_pincode,
            data.permanent_district,
            data.permanent_state,
            data.permanent_country,
            data.overseas_address_line_1,
            data.overseas_address_line_2,
            data.overseas_address_line_3,
            data.overseas_pincode,
            data.overseas_district,
            data.overseas_state,
            data.overseas_country,
            data.communication_address_line_1,
            data.communication_address_line_2,
            data.communication_address_line_3,
            data.communication_pincode,
            data.communication_district,
            data.communication_state,
            data.communication_country,
            uuid // Replace with the actual uuid value
          ]
        );
      });
      Alert.alert("Success");
      router.navigate('screens/forms/profileDetailsForm');
    } catch (err) {
      console.log('error', err);
      router.navigate('screens/forms/profileDetailsForm');
    }
  };

  const FormField = ({ name, type, title, placeholder, dropdownData, validation, radioData }) => {
    return (
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => {
          switch (type) {
            case 'TextInput':
              return (
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>
            {title} {validation?.required && <Text style={styles.asterisk}>*</Text>}
          </Text>
                  <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                </View>
              );
            case 'dropdown':
              return (
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>{title}</Text>
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
                      paddingTop: -10,
                    }}
                    dropdownTextStyles={{
                      marginBottom: -8,
                    }}
                    setSelected={label => onChange(label)}
                    data={dropdownData.map(item => ({ value: item.key, label: item.value }))}
                    save="value"
                  />
                </View>
              );
            case 'checkbox':
              return (
                <View style={styles.checkboxContainer}>
                  <TouchableOpacity onPress={() => {
                    const newValue = !value;
                    onChange(newValue);
                    handleCheckboxChange(name, newValue);
                  }}>
                    <View style={[styles.checkbox, value && styles.checked]}>
                      {value && <Text style={styles.checkmark}>✓</Text>}
                    </View>
                  </TouchableOpacity>
                  <Text style={styles.label}>{title}</Text>
                </View>
              );
              case 'RadioButton':
                return(
                  <View style={styles.inputContainer}>
                  <Text style={styles.label}>{title}</Text>
                  <RadioButton
                    onSelect={(selectedValue) => onChange(selectedValue)}
                    radioButtonOptions={radioData}
                  />
                </View>
                )
            default:
              return null;
          }
        }}
      />
    );
  };

  if (!jsonData) {
    return <Text>Loading...</Text>;
  }

  const groupedElements = Object.entries(
    jsonData.elements.reduce((acc, field) => {
      const section = field.section || 'General';
      if (!acc[section]) {
        acc[section] = [];
      }
      acc[section].push(field);
      return acc;
    }, {})
  );

  return (
    <ScrollView>
      <Header backPath="screens/forms/personalDetailsForm" />
      <View style={styles.container}>
        {/* <Controller
          control={control}
          name="customer_type"
          render={({ field: { onChange, value } }) => (
            // <SelectList
            //   setSelected={onChange}
            //   data={['Resident', 'NRI', 'PRO', 'Foreigner']}
            //   save="value"
            //   placeholder="Select Customer Type"
            //   defaultOption={{ key: 'Resident', value: 'Resident' }}
            //   value={value}
            //   inputStyles={{
            //     fontSize: 18,
            //     borderColor: '#ccc',
            //     borderWidth: 1,
            //     paddingHorizontal: 8,
            //     paddingVertical: 10,
            //     marginBottom: 16,
            //   }}
            // />
            <View></View>
          )}
        /> */}
        {groupedElements.map(([section, fields]) => (
          <View key={section} >
            <TouchableOpacity onPress={() => toggleSection(section)}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>{section}</Text>
                <Ionicons
                  name={collapsedSections[section] ? 'chevron-down' : 'chevron-up'}
                  size={20}
                  color="black"
                />
              </View>
            </TouchableOpacity>
            {!collapsedSections[section] && (
              <View style={styles.sectionContent}>
                {fields.map((field, index) => (
                  <FormField key={index} {...field} />
                ))}
              </View>
            )}
          </View>
        ))}
        <Button title="Submit" onPress={handleSubmit(onSubmit)} color={themeColor}/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input:{
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 14,
    borderWidth: 0,

  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginBottom: -4,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#00408F',
    paddingLeft:10,
    marginTop:13
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:12,
    marginTop:12
  },
  checked: {
    backgroundColor: '#000',
  },
  checkmark: {
    color: '#fff',
    fontSize: 14,
  },
  label: {
    marginLeft: 8,
  },
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
},
sectionHeader: {
 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,

},
sectionTitle: {
  fontSize: 16,
  fontWeight: 'bold',
},
});
