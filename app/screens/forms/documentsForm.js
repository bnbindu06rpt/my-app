import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Button, TouchableOpacity, Image, LogBox, Pressable, Alert } from 'react-native';
import Collapsible from 'react-native-collapsible';
//import CustomUploadPicker from '../../components/formComponents/docImageUpload';
import CustomInput from '../../../components/formComponents/customInput';
import { documentDetailsFormData } from '../../../components/formComponents/formData';
import { themeColor } from '../../../constants/constants';
import { DropdownIcon, DropupIcon } from '../../../assets/images/assets';
import Header from '../../../components/customComponents/header';
import CustomUploadPicker from '../../../components/formComponents/docImageUpload';
import { router } from 'expo-router';
import { useFormContext } from '../../formContext';
import { Ionicons } from '@expo/vector-icons';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import useIdStore from '../../globalStore';
import { useSQLiteContext } from 'expo-sqlite/next';



export default function DocumentsForm() {
  const [selectedFiles, setSelectedFiles] = useState({});
  const [formValues, setFormValues] = useState({});
  const [validationErrors, setValidationErrors] = useState({});
  const [isCollapsed, setIsCollapsed] = useState({});
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentElement, setCurrentElement] = useState(null);
  const uuid = useIdStore((state) => state.uuid); 
  const[documentData, setDocumentData]=useState({});
  const { updateFormData } = useFormContext();
  const db = useSQLiteContext();
  
 
  useEffect(() => {
    const initialCollapseState = {};
    documentDetailsFormData.elements.forEach(element => {
      if (element.section && initialCollapseState[element.section] === undefined) {
        initialCollapseState[element.section] = false; // Default to open
      }
    });
    setIsCollapsed(initialCollapseState);
    
    // Fetch and log all records from CustomerDocuments table
    const fetchRecords = async () => {
      try {
        const res = await db.getAllAsync(
          `SELECT * FROM "CustomerDocuments";`,
         
        );
        // const rows = results[0].rows;
        console.log('CustomerDocuments records:', res);
      } catch (error) {
        console.error('Error fetching records:', error);
      }
    };
    
    fetchRecords();
  }, []);

 
  const toggleSection = (section) => {
    setIsCollapsed(prevState => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };
  const handleFileSelected = (name, file) => {
    setSelectedFiles((prevFiles) => ({
      ...prevFiles,
      [name]: file
    }));
    setValidationErrors(prevErrors => ({
      ...prevErrors,
      [name]: null
    }));
  };
 
 
  const handleInputChange = (name, value) => {
    setFormValues((prevValues) => {
      const updatedValues = { ...prevValues, [name]: value };
      const errors = { ...validationErrors };
      documentDetailsFormData.elements.forEach(section => {
        section.fields.forEach(field => {
          if (field.name === name) {
            if (field.isRequired && !value) {
              errors[name] = `${field.title} is required`;
            } else if (field.validation && field.validation.regex && !field.validation.regex.test(value)) {
              errors[name] = field.validation.message;
            } else {
              delete errors[name];
            }
          }
        });
      });
      setValidationErrors(errors);
      return updatedValues;
    });
  };
 
 
  const handleSubmit = async() => {
    console.log('PAN or Form 60 ID:', formValues.pan_or_form_60_id);
    console.log('POA if not Aadhaar authenticated ID:', formValues.poa_if_not_aadhaar_authenticated_id);
    console.log('MITC Document ID:', formValues.mitc_document_id);
    console.log('Communication Address Proof or Declaration ID:', formValues.communication_address_proof_or_declaration_id);
    console.log('Miscellaneous Document ID:', formValues.miscellaneous_document_id);
    console.log('Miscellaneous Document Issue Date:', formValues.miscellaneous_document_issuedate);
    console.log('Miscellaneous Document Expiry Date:', formValues.miscellaneous_document_expiredate);
    console.log('Passport or Visa for NRI/OCI/Foreigner ID:', formValues.passport_or_visa_for_nri_oci_foreigner_id);
    console.log('Passport or Visa for NRI/OCI/Foreigner Place of Issue:', formValues.passport_or_visa_for_nri_oci_foreigner_place_of_issue);
    console.log('Passport or Visa for NRI/OCI/Foreigner Issue Date:', formValues.passport_or_visa_for_nri_oci_foreigner_issuedate);
    console.log('Passport or Visa for NRI/OCI/Foreigner Expiry Date:', formValues.passport_or_visa_for_nri_oci_foreigner_expiredate);
    console.log('Signature Document URI:', selectedFiles.signature_document?.assets[0]?.uri);
    console.log('Photo Document URI:', selectedFiles.photo_document?.assets[0]?.uri);
    console.log('PAN or Form 60 Document URI:', selectedFiles.pan_or_form_60_document?.assets[0]?.uri);
    console.log('POA if not Aadhaar authenticated Document URI:', selectedFiles.poa_if_not_aadhaar_authenticated_document?.assets[0]?.uri);
    console.log('MITC Document URI:', selectedFiles.mitc_document?.assets[0]?.uri);
    console.log('Communication Address Proof or Declaration Document URI:', selectedFiles.communication_address_proof_or_declaration_document?.assets[0]?.uri);
    console.log('Miscellaneous Document URI:', selectedFiles.miscellaneous_document_document?.assets[0]?.uri);
    console.log('Passport or Visa for NRI/OCI/Foreigner Document URI:', selectedFiles.passport_or_visa_for_nri_oci_foreigner_document?.assets[0]?.uri);
    console.log('Customer UUID:', uuid);
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    } 
    updateFormData(formData);
    const formData = {
      ...formValues,
      selectedFiles
    };
 
    try{
 
      await db.withTransactionAsync(tx => {
        db.runAsync(
          `INSERT INTO "CustomerDocuments" (
            pan_or_form_60_id,
            poa_if_not_aadhaar_authenticated_id,
            mitc_document_id,
            communication_address_proof_or_declaration_id,
            miscellaneous_document_id,
            miscellaneous_document_issuedate,
            miscellaneous_document_expiredate,
            passport_or_visa_for_nri_oci_foreigner_id,
            passport_or_visa_for_nri_oci_foreigner_place_of_issue,
            passport_or_visa_for_nri_oci_foreigner_issuedate,
            passport_or_visa_for_nri_oci_foreigner_expiredate,
             signature_document_uri,
            photo_document_uri,
            pan_or_form_60_document_uri,
            poa_if_not_aadhaar_authenticated_document_uri,
            mitc_document_uri,
            communication_address_proof_or_declaration_document_uri,
            miscellaneous_document_document_uri,
            passport_or_visa_for_nri_oci_foreigner_document_uri,
            customer_uuid
         
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?,?,?,?,?,?,?)`,
          [
            formValues.pan_or_form_60_id,
            formValues.poa_if_not_aadhaar_authenticated_id,
            formValues.mitc_document_id,
            formValues.communication_address_proof_or_declaration_id,
            formValues.miscellaneous_document_id,
            formValues.miscellaneous_document_issuedate,
            formValues.miscellaneous_document_expiredate,
            formValues.passport_or_visa_for_nri_oci_foreigner_id,
            formValues.passport_or_visa_for_nri_oci_foreigner_place_of_issue,
            formValues.passport_or_visa_for_nri_oci_foreigner_issuedate,
            formValues.passport_or_visa_for_nri_oci_foreigner_expiredate,
            selectedFiles.signature_document?.assets[0]?.uri,
            selectedFiles.photo_document?.assets[0]?.uri,
            selectedFiles.pan_or_form_60_document?.assets[0]?.uri,
            selectedFiles.poa_if_not_aadhaar_authenticated_document?.assets[0]?.uri,
            selectedFiles.mitc_document?.assets[0]?.uri,
            selectedFiles.communication_address_proof_or_declaration_document?.assets[0]?.uri,
            selectedFiles.miscellaneous_document_document?.assets[0]?.uri,
            selectedFiles.passport_or_visa_for_nri_oci_foreigner_document?.assets[0]?.uri,
            // selectedFiles.photo_document.assets[0].uri,
            // selectedFiles.pan_or_form_60_document.assets[0].uri,
            // selectedFiles.poa_if_not_aadhaar_authenticated_document.assets[0].uri,
            // selectedFiles.mitc_document.assets[0].uri,
            // selectedFiles.communication_address_proof_or_declaration_document.assets[0].uri,
            // selectedFiles.miscellaneous_document_document.assets[0].uri,
            // selectedFiles.passport_or_visa_for_nri_oci_foreigner_document.assets[0].uri,
            uuid
          ],
          () => { console.log('Documents inserted successfully'); },
          (tx, error) => { console.error('Error inserting documents', error); }
        );
      });
      Alert.alert("Success");
      router.navigate("/screens/forms/review")
    }
    catch(e){
      console.log("ERROR FILLING DOCUMENTS FORM",e);
    }
    
  
 
    // Use JSON.stringify with a replacer function to log the entire structure
    // console.log('Form data:', JSON.stringify(formData, (key, value) => {
    //   if (value && typeof value === 'object' && 'assets' in value) {
    //     // Convert the assets array to a fully expanded array
    //     return { ...value, assets: value.assets.map(asset => ({ ...asset })) };
    //   }
    //   return value;
    // }, 2));
    setDocumentData(JSON.stringify(formData, (key, value) => {
        if (value && typeof value === 'object' && 'assets' in value) {
          // Convert the assets array to a fully expanded array
          return { ...value, assets: value.assets.map(asset => ({ ...asset })) };
        }
        return value;
      }, 2));
    console.log("form dataaaaaaaaaa", documentData)
    
    
  };
 
 
  const validateForm = () => {
    const errors = {};
    documentDetailsFormData.elements.forEach(section => {
      section.fields.forEach(field => {
        if (field.isRequired && !formValues[field.name] && !selectedFiles[field.name]) {
          errors[field.name] = `${field.title} is required`;
        }
        if (field.validation && field.validation.regex && !field.validation.regex.test(formValues[field.name])) {
          errors[field.name] = field.validation.message;
        }
      });
    });
    return errors;
  };
 
 
  const getFileNameFromUri = (uri) => {
    if (!uri) return null;
    const uriComponents = uri.split('/');
    return uriComponents[uriComponents.length - 1];
  };
 
  const handleDateChange = (event, selectedDate) => {
    setShowCalendarModal(false);
    if (selectedDate) {
      setFormValues({
        ...formValues,
        [currentElement.name]: selectedDate.toISOString()
      });
      setSelectedDate(selectedDate);
    }
  };
 
  const extractDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString();
  };
 
  LogBox.ignoreAllLogs();
 
  const renderFormElements = (section) => {
    return documentDetailsFormData.elements
      .filter(element => element.section === section)
      .map((element, elementIndex) => (
        <View key={elementIndex} style={styles.elementCard}>
          <Text style={styles.elementName}>{element.title}</Text>
          {element.fields.map(field => (
            <View key={field.name} style={styles.formElement}>
 
              {field.type === 'ImagePicker' && (
                <CustomUploadPicker
                  title={field.title}
                  isRequired={field.isRequired}
                  placeholder={field.placeholder}
                  onFileSelected={(file) => handleFileSelected(field.name, file)}
                />
              )}
              {field.type === 'TextInput' && (
                <CustomInput
                  title={field.title}
                  placeholder={field.placeholder}
                  isRequired={field.isRequired}
                  inputType={field.inputType}
                  name={field.name}
                  onChange={(value) => handleInputChange(field.name, value)}
                  value={formValues[field.name] || ''}
                />
              )}
              {field.type === 'Date' && (
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>{field.title}</Text>
                  <Pressable onPress={() => {
                    setShowCalendarModal(true);
                    setCurrentElement(field);
                  }}>
                    <View style={styles.dateInput}>
                      <Text style={styles.dateText}>
                        {formValues[field.name] ? extractDate(formValues[field.name]) : 'Select date '}
                      </Text>
                      <View style={styles.icon}>
                        <Ionicons name='calendar' size={20} color='black' />
                      </View>
                    </View>
                  </Pressable>
                  {showCalendarModal && currentElement === field && (
                    <View>
                      <RNDateTimePicker
                        value={selectedDate}
                        isRequired={field.isRequired}
                        mode="date"
                        display="default"
                        onChange={(event, selectedDate) => handleDateChange(event, selectedDate)}
                      />
                    </View>
                  )}
                </View>
              )}
              {validationErrors[field.name] && <Text style={styles.error}>{validationErrors[field.name]}</Text>}
            </View>
          ))}
        </View>
      ));
  };
 
  return (
    <View style={styles.container}>
      <Header backPath="screens/forms/profileDetailsForm" />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.card}>
          <View style={styles.section}>
            {Object.keys(isCollapsed).map((section, index) => (
              <View key={index} style={styles.sectionContainer}>
                <TouchableOpacity onPress={() => toggleSection(section)}>
                  <Text style={styles.sectionTitle}>{section}</Text>
                  <Image
                    source={isCollapsed[section] ? DropupIcon : DropdownIcon}
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
        <Button title="Submit" onPress={handleSubmit} color={themeColor} />
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B3C9E7',
    marginTop: -10,
  },
  card: {
    backgroundColor: 'white',
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
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#00408F',
    paddingBottom: 5,
   //backgroundColor:'red'
  },
  formElement: {
    marginBottom: 8,
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
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: '#fff', // Add a background color to make the button stand out
  },
  elementCard: {
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  elementName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 13,
    color: '#00408F',
    fontWeight:'bold',
    marginBottom: 5,
    //backgroundColor:'red'
  },
  dateInput: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    //backgroundColor:'red'
  },
  dateText: {
    flex: 1,
    fontSize: 12,
    color: 'grey',
  },
  icon: {
    marginLeft: 10,
  },
});

 
//---------------------------------------------------------------------
// export default function DocumentsForm() {
//   const [selectedFiles, setSelectedFiles] = useState({});
//   const [formValues, setFormValues] = useState({});
//   const [validationErrors, setValidationErrors] = useState({});
//   const [isCollapsed, setIsCollapsed] = useState('Document Details');

//   const { updateFormData } = useFormContext();
 
//   // Initialize isCollapsed state for each section
//   // useEffect(() => {
//   //   const initialCollapseState = {};
//   //   documentDetailsFormData.elements.forEach(element => {
//   //     if (element.section && initialCollapseState[element.section] === undefined) {
//   //       initialCollapseState[element.section] = true; // Default to collapsed
//   //     }
//   //   });
//   //   setIsCollapsed(initialCollapseState);
//   // }, []);

//   useEffect(() => {
//     const initialCollapseState = {};
//     documentDetailsFormData.elements.forEach(element => {
//       if (element.section && initialCollapseState[element.section] === undefined) {
//         initialCollapseState[element.section] = false; // Default to open
//       }
//     });
//     setIsCollapsed(initialCollapseState);
//   }, []);
 
//   const toggleSection = (section) => {
//     setIsCollapsed(prevState => ({
//       ...prevState,
//       [section]: !prevState[section]
//     }));
//   };
 
//   // const handleFileSelected = (name, file) => {
//   //   setSelectedFiles((prevFiles) => ({
//   //     ...prevFiles,
//   //     [name]: file
//   //   }));
//   //   setValidationErrors(prevErrors => ({
//   //     ...prevErrors,
//   //     [name]: null
//   //   }));
//   // };

//   const handleFileSelected = (name, file) => {
//     setSelectedFiles((prevFiles) => ({
//       ...prevFiles,
//       [name]: file
//     }));
    
//     const fileUri = file.assets[0].uri; // Assuming single file selection
//     setFormValues((prevValues) => ({
//       ...prevValues,
//       [name]: fileUri
//     }));
    
//     setValidationErrors(prevErrors => ({
//       ...prevErrors,
//       [name]: null
//     }));
//   };
 
//   const handleInputChange = (name, value) => {
//     setFormValues((prevValues) => {
//       const updatedValues = { ...prevValues, [name]: value };
//       const errors = { ...validationErrors };
//       const element = documentDetailsFormData.elements.find((el) => el.name === name);
 
//       if (element) {
//         if (element.isRequired && !value) {
//           errors[name] = `${element.title} is required`;
//         } else if (element.validation && element.validation.regex && !element.validation.regex.test(value)) {
//           errors[name] = element.validation.message;
//         } else {
//           delete errors[name];
//         }
//       }
 
//       setValidationErrors(errors);
//       return updatedValues;
//     });
//   };
 
//   const handleSubmit = () => {
//     const errors = validateForm();
//     if (Object.keys(errors).length > 0) {
//       setValidationErrors(errors);
//       return;
//     }
//     console.log('Selected files:', selectedFiles);
//     Object.entries(selectedFiles).forEach(([key, file]) => {
//       console.log(`${key}:`);
//       file.assets.forEach(asset => {
//         const fileName = asset.fileName || getFileNameFromUri(asset.uri);
//         console.log(`  URI: ${asset.uri}`);
//         console.log(`  FileName: ${fileName}`);
//         console.log(`  MimeType: ${asset.mimeType}`);
//         console.log(`  Width: ${asset.width}`);
//         console.log(`  Height: ${asset.height}`);
//       });
//     });
//     console.log('Form values:', formValues);
//     updateFormData(formValues);
//     router.navigate('/screens/forms/review');
//   };
 
//   const validateForm = () => {
//     const errors = {};
//     if (documentDetailsFormData && documentDetailsFormData.elements) {
//       documentDetailsFormData.elements.forEach((element) => {
//         if (element.isRequired && !formValues[element.name] && !selectedFiles[element.name]) {
//           errors[element.name] = `${element.title} is required`;
//         }
//         if (element.validation && element.validation.regex && !element.validation.regex.test(formValues[element.name])) {
//           errors[element.name] = element.validation.message;
//         }
//       });
//     }
//     return errors;
//   };
 
//   const getFileNameFromUri = (uri) => {
//     if (!uri) return null;
//     const uriComponents = uri.split('/');
//     return uriComponents[uriComponents.length - 1];
//   };
 
//   LogBox.ignoreAllLogs();
 
//   const renderFormElements = (section) => {
//     return documentDetailsFormData.elements
//       .filter(element => element.section === section)
//       .sort((a, b) => a.order - b.order)
//       .map(element => (
//         <View key={element.name} style={styles.formElement}>
//           {element.type === 'ImagePicker' && (
//             <CustomUploadPicker
//               title={element.title}
//               placeholder={element.placeholder}
//               onFileSelected={(file) => handleFileSelected(element.name, file)}
//             />
//           )}
//           {element.type === 'TextInput' && (
//             <CustomInput
//               title={element.title}
//               placeholder={element.placeholder}
//               isRequired={element.isRequired}
//               inputType={element.inputType}
//               name={element.name}
//               onChange={(value) => handleInputChange(element.name, value)}
//               value={formValues[element.name] || ''}
//             />
//           )}
//           {validationErrors[element.name] && <Text style={styles.error}>{validationErrors[element.name]}</Text>}
//         </View>
//       ));
//   };
 
//   return (
//     <View style={styles.container}>
//       <Header backPath="screens/forms/personalDetailsForm" />
//       <ScrollView contentContainerStyle={styles.scrollViewContainer}>
//         <View style={styles.card}>
//           <View style={styles.section}>
//             {Object.keys(isCollapsed).map((section, index) => (
//               <View key={index} style={styles.sectionContainer}>
//                 <TouchableOpacity onPress={() => toggleSection(section)}>
//                   <Text style={styles.sectionTitle}>{section}</Text>
//                   <Image
//                     source={isCollapsed[section] ? DropupIcon : DropdownIcon}
//                     resizeMode="contain"
//                     style={styles.dropdownIcon}
//                   />
//                 </TouchableOpacity>
//                 <Collapsible collapsed={isCollapsed[section]}>
//                   {renderFormElements(section)}
//                 </Collapsible>
//               </View>
//             ))}
//           </View>
//         </View>
//       </ScrollView>
//       <View style={styles.buttonContainer}>
//         <Button title="Submit" onPress={handleSubmit} color={themeColor} />
//       </View>
//     </View>
//   );
// }
 
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#B3C9E7',
//   },
//   card: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 10,
//     padding: 10,
//     shadowColor: '#000000',
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//     elevation: 5,
//     marginBottom: 20,
//   },
//   scrollViewContainer: {
//     paddingBottom: 100, // Adjust padding to make space for the button
//   },
//   section: {
//     marginBottom: 20,
//   },
//   sectionContainer: {
//     marginBottom: 20,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 15,
//     color: '#00408F',
//     paddingBottom: 5,
//   },
//   formElement: {
//     marginBottom: 8,
//   },
//   error: {
//     color: 'red',
//     marginBottom: 3,
//     fontSize: 12,
//   },
//   dropdownIcon: {
//     width: 20,
//     height: 20,
//     position: 'absolute',
//     right: 10,
//     top: 9,
//   },
//   buttonContainer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     padding: 10,
//     backgroundColor: '#fff', // Add a background color to make the button stand out
//   },
// });
 