// import React, { useState } from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';
// import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
// import * as ImagePicker from 'expo-image-picker';
 
// const CustomUploadPicker = ({ title, placeholder, onFileSelected }) => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [modalVisible, setModalVisible] = useState(false);
 
//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });
 
//     if (!result.canceled) {
//       setSelectedFile(result.assets ? result : { assets: [{ uri: result.uri }] });
//       onFileSelected(result);
//     }
//   };
 
//   const captureImage = async () => {
//     let result = await ImagePicker.launchCameraAsync({
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });
 
//     if (!result.canceled) {
//       setSelectedFile(result.assets ? result : { assets: [{ uri: result.uri }] });
//       onFileSelected(result);
//     }
//   };
 
//   const getFileNameFromUri = (uri) => {
//     if (!uri) return null;
//     const uriComponents = uri.split('/');
//     return uriComponents[uriComponents.length - 1];
//   };
 
//   const discardImage = () => {
//     setSelectedFile(null);
//     onFileSelected(null);
//   };
 
//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>{title}</Text>
//       <View style={styles.placeholderContainer}>
//         <Text style={styles.placeholderText}>{selectedFile ? getFileNameFromUri(selectedFile.assets[0].uri) : placeholder}</Text>
//         <View style={styles.iconContainer}>
//           <TouchableOpacity style={styles.iconButton} onPress={pickImage}>
//             <FontAwesome name="photo" size={18} color="black" />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.iconButton} onPress={captureImage}>
//             <FontAwesome name="camera" size={18} color="black" />
//           </TouchableOpacity>
//         </View>
//       </View>
//       {selectedFile && (
//         <View style={styles.actionContainer}>
//           <View style={styles.statusContainer}>
//             <FontAwesome name="circle" size={18} color="green" />
//             <Text style={styles.statusText}>Uploaded</Text>
//           </View>
         
//           <TouchableOpacity style={styles.actionButton} onPress={() => setModalVisible(true)}>
//           <View style={styles.statusContainer}>
//             <MaterialIcons name="visibility" size={18} color="black" />
//             <Text style={styles.statusText}>Preview</Text>
//           </View>
//           </TouchableOpacity>
 
//           <TouchableOpacity style={styles.actionButton} onPress={discardImage}>
//           <View style={styles.statusContainer}>
//             <MaterialIcons name="cancel" size={18} color="black" />
//             <Text style={styles.statusText}>Discard</Text>
//             </View>
//           </TouchableOpacity>
       
//         </View>
//       )}
//       <Modal
//         animationType="slide"
//         transparent={false}
//         visible={modalVisible}
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View style={styles.modalContent}>
//           <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalCloseButton}>
//             <Text style={styles.modalCloseText}>Close</Text>
//           </TouchableOpacity>
//           {selectedFile && (
//             <Image source={{ uri: selectedFile.assets[0].uri }} style={styles.imagePreview} />
//           )}
//         </View>
//       </Modal>
//     </View>
//   );
// };
 
// const styles = StyleSheet.create({
//   container: {
//     marginVertical: 20,
//     width: '100%',
//     //backgroundColor:'yellow'
//   },
//   heading: {
//     marginBottom: 3,
//     fontSize: 13,
//     fontWeight: 'bold',
//     color: '#00408F',
//   },
//   placeholderContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     paddingVertical: 7,
//   },
//   placeholderText: {
//     flex: 1,
//     fontSize: 12,
//     color: 'gray',
//     paddingHorizontal: 10,
//   },
//   iconContainer: {
//     flexDirection: 'row',
//   },
//   iconButton: {
//     marginHorizontal: 10,
//   },
// //   actionContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginTop: 10,
// //   },
// actionContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 10,
//     paddingHorizontal:10,
//     justifyContent: 'space-between',
//     //backgroundColor:'red' // Add this line
//   },
//   statusContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   statusText: {
//     marginLeft: 5,
//     fontSize: 12,
//     color: 'gray',
//   },
//   actionButton: {
//     marginLeft: 20,
//   },
//   modalContent: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   modalCloseButton: {
//     position: 'absolute',
//     top: 40,
//     right: 20,
//   },
//   modalCloseText: {
//     fontSize: 18,
//     color: 'blue',
//   },
//   imagePreview: {
//     width: '100%',
//     height: '80%',
//     resizeMode: 'contain',
//   },
// });
 
// export default CustomUploadPicker;
//...............................................
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, Pressable } from 'react-native';
import { FontAwesome, MaterialIcons, Ionicons } from 'react-native-vector-icons';
import * as ImagePicker from 'expo-image-picker';
import CustomInput from '../../components/formComponents/customInput';
import RNDateTimePicker from '@react-native-community/datetimepicker';
 
const CustomUploadPicker = ({ title, placeholder, onFileSelected, fields, isRequired }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [documentID, setDocumentID] = useState('');
  const [issuedDate, setIssuedDate] = useState(null);
  const [expireDate, setExpireDate] = useState(null);
  const [showIssuedDatePicker, setShowIssuedDatePicker] = useState(false);
  const [showExpireDatePicker, setShowExpireDatePicker] = useState(false);
 
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
 
    if (!result.canceled) {
      setSelectedFile(result.assets ? result : { assets: [{ uri: result.uri }] });
      onFileSelected(result);
    }
  };
 
  const captureImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
 
    if (!result.canceled) {
      setSelectedFile(result.assets ? result : { assets: [{ uri: result.uri }] });
      onFileSelected(result);
    }
  };
 
  const getFileNameFromUri = (uri) => {
    if (!uri) return null;
    const uriComponents = uri.split('/');
    return uriComponents[uriComponents.length - 1];
  };
 
  const discardImage = () => {
    setSelectedFile(null);
    onFileSelected(null);
  };
 
  const handleIssuedDateChange = (event, selectedDate) => {
    setShowIssuedDatePicker(false);
    if (selectedDate) {
      setIssuedDate(selectedDate);
    }
  };
 
  const handleExpireDateChange = (event, selectedDate) => {
    setShowExpireDatePicker(false);
    if (selectedDate) {
      setExpireDate(selectedDate);
    }
  };
 
  return (
    <View style={styles.container}>
        <Text style={styles.heading}>
  {title}
  {isRequired && <Text style={styles.requiredStar}> *</Text>}
</Text> 
      {fields.includes('documentID') && (
        <CustomInput
          placeholder="Enter Document ID"
          onChange={setDocumentID}
          value={documentID}
          inputType="default"
          style={styles.input}
        />
      )}
     
      {fields.includes('issuedDate') && (
        <View style={[styles.inputContainer, styles.input]}>
          <Pressable onPress={() => setShowIssuedDatePicker(true)}>
            <View style={styles.dateInput}>
              <Text style={styles.dateText}>
                {issuedDate ? issuedDate.toLocaleDateString() : 'Enter Issued Date'}
              </Text>
              <View style={styles.icon}>
                <Ionicons name='calendar' size={20} color='black' />
              </View>
            </View>
          </Pressable>
          {showIssuedDatePicker && (
            <RNDateTimePicker
              value={issuedDate || new Date()}
              mode="date"
              display="default"
              onChange={handleIssuedDateChange}
            />
          )}
        </View>
      )}
 
      {fields.includes('expireDate') && (
        <View style={[styles.inputContainer, styles.input]}>
          <Pressable onPress={() => setShowExpireDatePicker(true)}>
            <View style={styles.dateInput}>
              <Text style={styles.dateText}>
                {expireDate ? expireDate.toLocaleDateString() : 'Enter Expire Date'}
              </Text>
              <View style={styles.icon}>
                <Ionicons name='calendar' size={20} color='black' />
              </View>
            </View>
          </Pressable>
          {showExpireDatePicker && (
            <RNDateTimePicker
              value={expireDate || new Date()}
              mode="date"
              display="default"
              onChange={handleExpireDateChange}
            />
          )}
        </View>
      )}
 
      {fields.includes('document') && (
        <View style={[styles.placeholderContainer, styles.input]}>
          <Text style={styles.placeholderText}>{selectedFile ? getFileNameFromUri(selectedFile.assets[0].uri) : placeholder}</Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.iconButton} onPress={pickImage}>
              <FontAwesome name="photo" size={18} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} onPress={captureImage}>
              <FontAwesome name="camera" size={18} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      )}
 
      {selectedFile && (
        <View style={[styles.actionContainer, styles.input]}>
          <View style={styles.statusContainer}>
            <FontAwesome name="circle" size={18} color="green" />
            <Text style={styles.statusText}>Uploaded</Text>
          </View>
 
          <TouchableOpacity style={styles.actionButton} onPress={() => setModalVisible(true)}>
            <View style={styles.statusContainer}>
              <MaterialIcons name="visibility" size={18} color="black" />
              <Text style={styles.statusText}>Preview</Text>
            </View>
          </TouchableOpacity>
 
          <TouchableOpacity style={styles.actionButton} onPress={discardImage}>
            <View style={styles.statusContainer}>
              <MaterialIcons name="cancel" size={18} color="black" />
              <Text style={styles.statusText}>Discard</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
 
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalCloseButton}>
            <Text style={styles.modalCloseText}>Close</Text>
          </TouchableOpacity>
          {selectedFile && (
            <Image source={{ uri: selectedFile.assets[0].uri }} style={styles.imagePreview} />
          )}
        </View>
      </Modal>
    </View>
  );
};
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderRadius: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
  heading: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#00408F',
  },
  input: {
    marginVertical: 10,
    color: 'gray',
  },
  inputContainer: {},
  dateInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 7,
  },
  dateText: {
    flex: 1,
    fontSize: 12,
    color: 'gray',
    paddingHorizontal: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
  placeholderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 7,
  },
  placeholderText: {
    flex: 1,
    fontSize: 12,
    color: 'gray',
    paddingHorizontal: 10,
  },
  requiredStar: {
    color: 'red',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    marginHorizontal: 10,
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    marginLeft: 5,
    fontSize: 12,
    color: 'gray',
  },
  actionButton: {
    marginLeft: 20,
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalCloseButton: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  modalCloseText: {
    fontSize: 18,
    color: 'blue',
  },
  imagePreview: {
    width: '100%',
    height: '80%',
    resizeMode: 'contain',
  },
});
 
export default CustomUploadPicker;