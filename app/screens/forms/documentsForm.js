import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Button, TouchableOpacity, Image, LogBox } from 'react-native';
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



 
export default function DocumentsForm() {
  const [selectedFiles, setSelectedFiles] = useState({});
  const [formValues, setFormValues] = useState({});
  const [validationErrors, setValidationErrors] = useState({});
  const [isCollapsed, setIsCollapsed] = useState({});
  const { updateFormData } = useFormContext();
  const[documentData, setDocumentData]=useState([]);
 
  useEffect(() => {
    const initialCollapseState = {};
    documentDetailsFormData.elements.forEach(element => {
      if (element.section && initialCollapseState[element.section] === undefined) {
        initialCollapseState[element.section] = false; // Default to open
      }
    });
    setIsCollapsed(initialCollapseState);
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
      const element = documentDetailsFormData.elements.find((el) => el.name === name);
 
      if (element) {
        if (element.isRequired && !value) {
          errors[name] = `${element.title} is required`;
        } else if (element.validation && element.validation.regex && !element.validation.regex.test(value)) {
          errors[name] = element.validation.message;
        } else {
          delete errors[name];
        }
      }
 
      setValidationErrors(errors);
      return updatedValues;
    });
  };
 
  const handleSubmit = () => {
    const errors = validateForm();
    // if (Object.keys(errors).length > 0) {
    //   setValidationErrors(errors);
    //   return;
    // }
    console.log('Selected files:', selectedFiles);
    Object.entries(selectedFiles).forEach(([key, file]) => {
      console.log(`${key}:`);
      file.assets.forEach(asset => {
        const fileName = asset.fileName || getFileNameFromUri(asset.uri);
        console.log(`  URI: ${asset.uri}`);
        console.log(`  FileName: ${fileName}`);
        console.log(`  MimeType: ${asset.mimeType}`);
        console.log(`  Width: ${asset.width}`);
        console.log(`  Height: ${asset.height}`);
      } ,
      setDocumentData(asset.uri)
    );
    });
    console.log('Form values:', documentData);
    updateFormData(formValues);
   router.navigate('/screens/forms/review');
  
  };
 
  const validateForm = () => {
    const errors = {};
    if (documentDetailsFormData && documentDetailsFormData.elements) {
      documentDetailsFormData.elements.forEach((element) => {
        if (element.isRequired && !formValues[element.name] && !selectedFiles[element.name]) {
          errors[element.name] = `${element.title} is required`;
        }
        if (element.validation && element.validation.regex && !element.validation.regex.test(formValues[element.name])) {
          errors[element.name] = element.validation.message;
        }
      });
    }
    return errors;
  };
 
  const getFileNameFromUri = (uri) => {
    if (!uri) return null;
    const uriComponents = uri.split('/');
    return uriComponents[uriComponents.length - 1];
  };
 
  LogBox.ignoreAllLogs();
 
  const renderFormElements = (section) => {
    return documentDetailsFormData.elements
      .filter(element => element.section === section)
      .sort((a, b) => a.order - b.order)
      .map(element => (
        <View key={element.name} style={styles.formElement}>
          {element.type === 'ImagePicker' && (
            // <CustomUploadPicker
            //   title={element.title}
            //   placeholder={element.placeholder}
            //   onFileSelected={(file) => handleFileSelected(element.name, file)}
            // />
            <CustomUploadPicker
            //key={index}
            title={element.title}
            placeholder={element.placeholder}
            onFileSelected={(file) => console.log(`${element.name} File Selected:`, file)}
            fields={element.fields}
            isRequired={element.isRequired}
          />
          )}
          {element.type === 'TextInput' && (
            <CustomInput
              title={element.title}
              placeholder={element.placeholder}
              isRequired={element.isRequired}
              inputType={element.inputType}
              name={element.name}
              onChange={(value) => handleInputChange(element.name, value)}
              value={formValues[element.name] || ''}
            />
          )}
          {validationErrors[element.name] && <Text style={styles.error}>{validationErrors[element.name]}</Text>}
        </View>
      ));
  };
 
  return (
    <View style={styles.container}>
      <Header backPath="screens/forms/personalDetailsForm" />
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
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#00408F',
    paddingBottom: 5,
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
 