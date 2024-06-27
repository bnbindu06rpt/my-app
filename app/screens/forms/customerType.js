
import { View, Text, StyleSheet, ScrollView, Button, TextInput, Alert, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useId } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import DateTimePicker from '@react-native-community/datetimepicker';
import Header from '../../../components/customComponents/header';
import { SQLiteProvider } from 'expo-sqlite/next';
import { useSQLiteContext } from 'expo-sqlite/next';
import { router } from 'expo-router';
import { useContext } from 'react';
import { useFormContext } from "../../formContext";
import uuid from 'react-native-uuid';
import useIdStore from '../../globalStore';
import Database from '../../openDatabase';


 
export default function ProductType() {

    const [selectedValue, setSelectedValue] = useState('');
    const [selectedValueRes, setSelectedValueRes] = useState('');
    const [applicantType, setApplicantType] = useState('');
    const [numApplicants, setNumApplicants] = useState('');
    const [dob, setDob] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [mop, setMop] = useState('');
    const [dobProofTaken, setDobProofTaken] = useState(false);
    const [formValues, setFormValues] = useState([]);
    const [accountUnderGuardian, setAccountUnderGuardian] = useState(false);
    const[customerData, setCustomerData]=useState([]);
    const { updateFormData } = useFormContext();
    const { formData } = useFormContext();
    const{id, setId}=useIdStore();  
 
 
    
    
    useEffect(() => {
        setFormValues(formData);
      }, [formData]);
    

    const off = useSQLiteContext();
    const data = [
        { key: "Resident", value: 'Resident' },
        { key: "NRI", value: 'NRI' },
        { key: "Foreigner ", value: 'Foreigner' },
        { key: "PIO", value: 'PIO' }
    ];
 

    const productOptions = {
        Resident: [
            { key: "Staff", value: 'Staff' },
            { key: "Salary", value: 'Salary' },
            { key: "Domestic", value: 'Domestic' },
            { key: "Senior", value: 'Senior' },
            { key: "Minor", value: 'Minor' },
        ],
        NRI: [
            { key: "NRE", value: 'NRE' },
            { key: "NRO", value: 'NRO' },
            { key: "Both NRE and NRO", value: 'Both NRE and NRO' },
        ],
        Foreigner: [
            { key: "NRE", value: 'NRE' },
            { key: "NRO", value: 'NRO' },
            { key: "Both NRE and NRO", value: 'Both NRE and NRO' },
        ],
        PIO: [
            { key: "NRE", value: 'NRE' },
            { key: "NRO", value: 'NRO' },
            { key: "Both NRE and NRO", value: 'Both NRE and NRO' },
        ]
    };
 
    const handleInputChange = (item) => {
        setSelectedValue(item);
        setSelectedValueRes('');
        setApplicantType('');
        setNumApplicants('');
        setDob(new Date());
        setMop('');
        setDobProofTaken(false);
        setAccountUnderGuardian(false);
    };


    const handleApplicantTypeChange = (item) => {
        setApplicantType(item);
        setNumApplicants('');
        setDob(new Date());
    };
 
    const handleNumApplicantsChange = (item) => {
        setNumApplicants(item);
    };
 
    const handleDobChange = (event, selectedDate) => {
        const currentDate = selectedDate || dob;
        setShowDatePicker(false);
        setDob(currentDate);
    };
 
    const validateMinorDob = () => {
        const today = new Date();
        const age = today.getFullYear() - dob.getFullYear();
        const monthDifference = today.getMonth() - dob.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
            age--;
        }
        return age < 18;
    };
 
    const validateDob = () => {
        const today = new Date();
        const age = today.getFullYear() - dob.getFullYear();
        const monthDifference = today.getMonth() - dob.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
            age--;
        }
        return age >= 18;
    };

    const handleSubmit = async () => {
       
        if (selectedValueRes === 'Minor' && !validateMinorDob()) {
            Alert.alert('Error', 'DOB does not indicate a minor account.');
            return;
        }
    
        if ((selectedValueRes === 'Domestic' || selectedValueRes === 'Senior') && applicantType === 'Joint Account' && !validateDob()) {
            Alert.alert('Error', 'Primary holder must be at least 18 years old.');
            return;
        }
    
        if (selectedValueRes === 'Minor' && (!dobProofTaken || !accountUnderGuardian)) {
            Alert.alert('Error', 'All declarations must be confirmed.');
            return;
        }
    


        async function getData() {
            const categoriesResult = await off.getAllAsync(
              `SELECT * FROM Customerss;`
            );
            setCustomerData(categoriesResult);
            console.log("categories", categoriesResult);
          }

          const uuidno= uuid.v4(); 
          setId(uuidno);
          console.log(uuidno,"uuid number")
        const formData = {
            customer_type: selectedValue,
            product_options: selectedValueRes,
            applicant_type: applicantType,
            number_of_applicants: numApplicants,
            primary_holder_dob: dob.toDateString(),
            mode_of_operation: mop,
            dob_proof_taken: dobProofTaken ? 1 : 0,
            account_under_guardian: accountUnderGuardian ? 1 : 0,
            uuid:uuidno
        };
       
        try {
       
            await off.withTransactionAsync(async (tx) => {
                await off.runAsync(
                    `INSERT INTO "Customersss"(
                 
                        customer_type,
                        product_options,
                        applicant_type,
                        number_of_applicants,
                        primary_holder_dob,
                        uuid,
                        mode_of_operation
                       
                        
                        
                        
                    ) VALUES (?, ?, ?, ?, ?,?,?);`,
                    [   
                        formData.customer_type,
                        formData.product_options,
                        formData.applicant_type,
                        formData.number_of_applicants,
                        formData.primary_holder_dob,
                        uuidno,
                        formData.mode_of_operation
                       
                        
                       
                    ]
                );
            });
           await getData();
           updateFormData(formData);
           
            router.navigate('/screens/forms/personalDetailsForm');
        } catch (error) {
            console.error('Error saving form data:', error);
            router.navigate('/screens/forms/personalDetailsForm');
            Alert.alert('Error', 'Failed to save form data.');
        }
    };

    return (
       
        <View style={styles.mainContainer}>
            <Header backPath={'screens/forms/newApplicationOptions'} />
            {/* <Database/> */}
            
            <Text style={styles.text}>Select Customer Type and Product</Text>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View>
                    <Text style={styles.header}>Customer Type <Text style={{ color: 'red' }}>*</Text></Text>
                    <SelectList
                        boxStyles={styles.selectBox}
                        dropdownStyles={styles.dropdown}
                        setSelected={(label) => handleInputChange(label)}
                        data={data.map(item => ({ value: item.value, label: item.value }))}
                        save="value"
                        defaultOption={formValues['customer_type']||'Select'}
                    />
                    {selectedValue && (
                        <View style={styles.container}>
                            <Text style={styles.header}>Product Options <Text style={{ color: 'red' }}>*</Text></Text>
                            <SelectList
                                boxStyles={styles.selectBox}
                                dropdownStyles={styles.dropdown}
                                setSelected={(label) => setSelectedValueRes(label)}
                                data={productOptions[selectedValue].map(item => ({ value: item.key, label: item.value }))}
                                save="value"
                                defaultOption={formValues['product_options']||''}
                            />
                        </View>
                    )}
 
                    {(selectedValueRes === 'Domestic' || selectedValueRes === 'Senior') && (
                        <View style={styles.applicantTypeContainer}>
                            <Text style={styles.header}>Applicant Type</Text>
                            <SelectList
                                boxStyles={styles.selectBox}
                                dropdownStyles={styles.dropdown}
                                setSelected={(label) => handleApplicantTypeChange(label)}
                                data={[
                                    { key: "Single Account", value: 'Single Account' },
                                    { key: "Joint Account", value: 'Joint Account' }
                                ]}
                                save="value"
                                defaultOption={formValues['applicant_type']||''}
                            />
                            {applicantType === 'Joint Account' && (
                                <>
                                    <View style={styles.container}>
                                        <Text style={styles.header}>Number of Applicants</Text>
                                        <SelectList
                                            boxStyles={styles.selectBox}
                                            dropdownStyles={styles.dropdown}
                                            setSelected={(label) => handleNumApplicantsChange(label)}
                                            data={[
                                                { key: "2", value: '2' },
                                                { key: "3", value: '3' }
                                            ]}
                                            save="value"
                                            defaultOption={formValues['number_of_applicants']||''}
                                        />
                                    </View>
                                    <View style={styles.container}>
                                        <Text style={styles.header}>Primary Holder's Date of Birth</Text>
                                        <TextInput
                                            style={styles.selectBox}
                                            value={dob.toDateString()}
                                            onFocus={() => setShowDatePicker(true)}
                                            showSoftInputOnFocus={false}
                                        />
                                        {showDatePicker && (
                                            <DateTimePicker
                                                value={dob||''}
                                                mode="date"
                                                display="default"
                                                onChange={handleDobChange}
                                                maximumDate={new Date()}
                                            />
                                        )}
                                    </View>
                                </>
                            )}
                        </View>
                    )}
 
                                        {selectedValueRes === 'Minor' && (
                        <View style={styles.minorContainer}>
                            <Text style={styles.header}>Primary Holder's Date of Birth</Text>
                            <TextInput
                                style={styles.selectBox}
                                value={dob.toDateString()}
                                onFocus={() => setShowDatePicker(true)}
                                showSoftInputOnFocus={false}
                            />
                            {showDatePicker && (
                                <DateTimePicker
                                    value={dob}
                                    mode="date"
                                    display="default"
                                    onChange={handleDobChange}
                                    maximumDate={new Date()}
                                />
                            )}
                            <Text style={styles.header}>Mode of Operation</Text>
                            <SelectList
                                boxStyles={styles.selectBox}
                                dropdownStyles={styles.dropdown}
                                setSelected={(label) => setMop(label)}
                                data={[
                                    { key: "Minor & Legal Guardian", value: 'Minor & Legal Guardian' },
                                    { key: "Minor & Natural Guardian", value: 'Minor & Natural Guardian' },
                                    { key: "Minor Alone & Operated by Guardian", value: 'Minor Alone & Operated by Guardian' }
                                ]}
                                save="value"
                            />
                            <TouchableOpacity
                                style={styles.checkboxContainer}
                                onPress={() => setDobProofTaken(!dobProofTaken)}
                            >
                                <View style={styles.checkbox}>
                                    {dobProofTaken && <View style={styles.checkboxTick} />}
                                </View>
                                <Text style={styles.checkboxLabel}>Please confirm that minor DOB proof has been taken.</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.checkboxContainer}
                                onPress={() => setAccountUnderGuardian(!accountUnderGuardian)}
                            >
                                <View style={styles.checkbox}>
                                    {accountUnderGuardian && <View style={styles.checkboxTick} />}
                                </View>
                                <Text style={styles.checkboxLabel}>Please confirm that account being operated under guardian knowledge.</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
 
                {(selectedValue && selectedValueRes) && (
                    <Button title='Continue' color={'#00408F'} onPress={handleSubmit} />
                )}
            </ScrollView>
        </View>
   
    );
}
 
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    scrollContainer: {
        flexGrow: 1,
        padding: 20,
    },
    header: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 20,
        paddingLeft: 12,
    },
    selectBox: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 10,
        paddingHorizontal: 10,
        fontSize: 16,
        borderWidth: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    dropdown: {
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    container: {
        marginTop: 20,
        borderRadius: 5,
    },
    applicantTypeContainer: {
        marginTop: 20,
        borderRadius: 5,
    },
    minorContainer: {
        marginTop: 20,
        borderRadius: 5,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkboxTick: {
        width: 14,
        height: 14,
        backgroundColor: '#00408F',
    },
    checkboxLabel: {
        fontSize: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
});



// import { View, Text, StyleSheet, ScrollView, Button, TextInput, Alert, TouchableOpacity } from 'react-native';
// import React, { useState } from 'react';
// import { SelectList } from 'react-native-dropdown-select-list';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import Header from '../../components/customComponents/header';
// import { SQLiteProvider } from 'expo-sqlite/next';
// import { useSQLiteContext } from 'expo-sqlite/next';
// import { router } from 'expo-router';
 
// // const formConfig = [
// //   {
// //     type: 'dropdown',
// //     name: 'customerType',
// //     title: 'Customer Type *',
// //     dropdownData: [
// //       { key: 'Resident', value: 'Resident' },
// //       { key: 'NRI', value: 'NRI' },
// //       { key: 'Foreigner', value: 'Foreigner' },
// //       { key: 'PIO', value: 'PIO' },
// //     ],
// //     placeholder: 'Select Customer Type',
// //   },
// //   {
// //     type: 'nested',
// //     name: 'Resident',
// //     title: 'Resident Options',
// //     fields: [
// //       {
// //         type: 'dropdown',
// //         name: 'productOptions',
// //         title: 'Product Options *',
// //         dropdownData: [
// //           { key: 'Staff', value: 'Staff' },
// //           { key: 'Salary', value: 'Salary' },
// //           { key: 'Domestic', value: 'Domestic' },
// //           { key: 'Senior', value: 'Senior' },
// //           { key: 'Minor', value: 'Minor' },
// //         ],
// //         placeholder: 'Select Product Option',
// //       },
// //     ],
// //   },
// //   // Similar nested configurations for NRI, Foreigner, and PIO
// // ];
 
// const formConfig = [
//     {
//       name: "customerType",
//       type: "dropdown",
//       title: "Customer Type",
//       placeholder: "Select",
//       dropdownData: [
//         { key: "resident", value: "Resident" },
//         { key: "nri", value: "NRI" },
//         { key: "foreigner", value: "Foreigner" },
//         { key: "pio", value: "PIO" }
//       ]
//     },
//     {
//       name: "resident",
//       type: "nested",
//       title: "Resident Options",
//       options: [
//         {
//           name: "productType",
//           type: "dropdown",
//           title: "Product Options",
//           placeholder: "Select",
//           dropdownData: [
//             { key: "staff", value: "Staff" },
//             { key: "salary", value: "Salary" },
//             { key: "domestic", value: "Domestic" },
//             { key: "senior", value: "Senior" },
//             { key: "minor", value: "Minor" }
//           ]
//         },
//         {
//           name: "applicantType",
//           type: "dropdown",
//           title: "Applicant Type",
//           placeholder: "Select",
//           dropdownData: [
//             { key: "single", value: "Single Account" },
//             { key: "joint", value: "Joint Account" }
//           ],
//           condition: { "productType": ["domestic", "senior"] }
//         },
//         {
//           name: "numApplicants",
//           type: "dropdown",
//           title: "Number of Applicants",
//           placeholder: "Select",
//           dropdownData: [
//             { key: "2", value: "2" },
//             { key: "3", value: "3" }
//           ],
//           condition: { "applicantType": ["joint"] }
//         },
//         {
//           name: "dob",
//           type: "datepicker",
//           title: "Primary Holder's Date of Birth",
//           placeholder: "Select Date",
//           condition: { "applicantType": ["joint"] }
//         }
//       ]
//     },
//     {
//       name: "minor",
//       type: "nested",
//       title: "Minor Options",
//       options: [
//         {
//           name: "dob",
//           type: "datepicker",
//           title: "Primary Holder's Date of Birth",
//           placeholder: "Select Date"
//         },
//         {
//           name: "mop",
//           type: "dropdown",
//           title: "Mode of Operation",
//           placeholder: "Select",
//           dropdownData: [
//             { key: "minor_legal_guardian", value: "Minor & Legal Guardian" },
//             { key: "minor_natural_guardian", value: "Minor & Natural Guardian" },
//             { key: "minor_guardian", value: "Minor Alone & Operated by Guardian" }
//           ]
//         },
//         {
//           name: "dobProofTaken",
//           type: "checkbox",
//           title: "Please confirm that minor DOB proof has been taken."
//         },
//         {
//           name: "accountUnderGuardian",
//           type: "checkbox",
//           title: "Please confirm that account is being operated under guardian knowledge."
//         }
//       ]
//     }
//   ];
 
// export default function ProductType() {
//   const [formValues, setFormValues] = useState({});
//   const [selectedCustomerType, setSelectedCustomerType] = useState('');
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [dob, setDob] = useState(new Date());
//   const off = useSQLiteContext();
 
//   const handleInputChange = (name, value) => {
//     setFormValues((prevValues) => ({
//       ...prevValues,
//       [name]: value,
//     }));
//   };
 
//   const renderConditionalFields = (fieldConfig) => {
//     return fieldConfig.fields.map((field) => {
//       switch (field.type) {
//         case 'dropdown':
//           return (
//             <View key={field.name} style={styles.formElement}>
//               <Text style={styles.label}>{field.title}</Text>
//               <SelectList
//                 boxStyles={styles.selectBox}
//                 dropdownStyles={styles.dropdown}
//                 setSelected={(value) => handleInputChange(field.name, value)}
//                 data={field.dropdownData.map((item) => ({ value: item.key, label: item.value }))}
//                 placeholder={field.placeholder}
//                 save="value"
//               />
//             </View>
//           );
//         case 'datePicker':
//           return (
//             <View key={field.name} style={styles.formElement}>
//               <Text style={styles.label}>{field.title}</Text>
//               <TextInput
//                 style={styles.selectBox}
//                 value={dob.toDateString()}
//                 onFocus={() => setShowDatePicker(true)}
//                 showSoftInputOnFocus={false}
//               />
//               {showDatePicker && (
//                 <DateTimePicker
//                   value={dob}
//                   mode="date"
//                   display="default"
//                   onChange={(event, selectedDate) => {
//                     const currentDate = selectedDate || dob;
//                     setShowDatePicker(false);
//                     setDob(currentDate);
//                     handleInputChange(field.name, currentDate);
//                   }}
//                   maximumDate={new Date()}
//                 />
//               )}
//             </View>
//           );
//         case 'checkbox':
//           return (
//             <TouchableOpacity
//               key={field.name}
//               style={styles.checkboxContainer}
//               onPress={() => handleInputChange(field.name, !formValues[field.name])}
//             >
//               <View style={styles.checkbox}>
//                 {formValues[field.name] && <View style={styles.checkboxTick} />}
//               </View>
//               <Text style={styles.checkboxLabel}>{field.title}</Text>
//             </TouchableOpacity>
//           );
//         default:
//           return null;
//       }
//     });
//   };
 
//   const renderFormElement = (element) => {
//     switch (element.type) {
//       case 'dropdown':
//         return (
//           <View key={element.name} style={styles.formElement}>
//             <Text style={styles.label}>{element.title}</Text>
//             <SelectList
//               boxStyles={styles.selectBox}
//               dropdownStyles={styles.dropdown}
//               setSelected={(value) => {
//                 handleInputChange(element.name, value);
//                 if (element.name === 'customerType') {
//                   setSelectedCustomerType(value);
//                   setFormValues({});
//                 }
//               }}
//               data={element.dropdownData.map((item) => ({ value: item.key, label: item.value }))}
//               placeholder={element.placeholder}
//               save="value"
//             />
//           </View>
//         );
//       case 'nested':
//         return selectedCustomerType === element.name ? (
//           <View key={element.name} style={styles.nestedContainer}>
//             <Text style={styles.nestedTitle}>{element.title}</Text>
//             {renderConditionalFields(element)}
//           </View>
//         ) : null;
//       default:
//         return null;
//     }
//   };
 
//   const validateForm = () => {
//     const today = new Date();
//     const age = today.getFullYear() - dob.getFullYear();
//     const monthDifference = today.getMonth() - dob.getMonth();
//     if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
//       age--;
//     }
//     if (formValues.productOptions === 'Minor' && age >= 18) {
//       Alert.alert('Error', 'DOB does not indicate a minor account.');
//       return false;
//     }
//     if ((formValues.productOptions === 'Domestic' || formValues.productOptions === 'Senior') && age < 18) {
//       Alert.alert('Error', 'Primary holder must be at least 18 years old.');
//       return false;
//     }
//     if (formValues.productOptions === 'Minor' && (!formValues.dobProofTaken || !formValues.accountUnderGuardian)) {
//       Alert.alert('Error', 'All declarations must be confirmed.');
//       return false;
//     }
//     return true;
//   };
 
//   const handleSubmit = async () => {
//     if (!validateForm()) return;
 
//     const formData = {
//       customer_type: formValues.customerType,
//       product_options: formValues.productOptions,
//       applicant_type: formValues.applicantType,
//       number_of_applicants: formValues.numberOfApplicants,
//       primary_holder_dob: dob.toDateString(),
//       mode_of_operation: formValues.modeOfOperation,
//       dob_proof_taken: formValues.dobProofTaken ? 1 : 0,
//       account_under_guardian: formValues.accountUnderGuardian ? 1 : 0,
//     };
 
//     try {
//       await off.withTransactionAsync(async (tx) => {
//         await off.runAsync(
//           `INSERT INTO Customer (
//               customer_type,
//               product_options,
//               applicant_type,
//               number_of_applicants,
//               primary_holder_dob,
//               mode_of_operation,
//               dob_proof_taken,
//               account_under_guardian
//             ) VALUES (?, ?, ?, ?, ?, ?, ?, ?);`,
//           [
//             formData.customer_type,
//             formData.product_options,
//             formData.applicant_type,
//             formData.number_of_applicants,
//             formData.primary_holder_dob,
//             formData.mode_of_operation,
//             formData.dob_proof_taken,
//             formData.account_under_guardian,
//           ]
//         );
//       });
 
//       router.navigate('/screens/searchCustomer');
//     } catch (error) {
//       console.error('Error saving form data:', error);
//       Alert.alert('Error', 'Failed to save form data.');
//     }
//   };
 
//   return (
//     <View style={styles.mainContainer}>
//       <Header backPath={'screens/newApplicationOptions'} />
//       <Text style={styles.text}>Select Customer Type and Product</Text>
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         {formConfig.map(renderFormElement)}
//         {(formValues.customerType && formValues.productOptions) && (
//           <Button title='Continue' color={'#00408F'} onPress={handleSubmit} />
//         )}
//       </ScrollView>
//     </View>
//   );
// }
 
// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     padding: 20,
//   },
//   header: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   text: {
//     fontSize: 18,
//     textAlign: 'center',
//     fontWeight: 'bold',
//     paddingTop: 20,
//     paddingLeft: 12,
//   },
//   formElement: {
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   selectBox: {
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     paddingVertical: 10,
//     paddingHorizontal: 10,
//     fontSize: 16,
//     borderWidth: 0,
//     backgroundColor: '#fff',
//     borderRadius: 5,
//   },
//   dropdown: {
//     backgroundColor: '#fff',
//     borderRadius: 5,
//   },
//   nestedContainer: {
//     marginTop: 20,
//     borderRadius: 5,
//   },
//   nestedTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   checkboxContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   checkbox: {
//     width: 20,
//     height: 20,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     marginRight: 8,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   checkboxTick: {
//     width: 14,
//     height: 14,
//     backgroundColor: '#00408F',
//   },
//   checkboxLabel: {
//     fontSize: 12,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
 