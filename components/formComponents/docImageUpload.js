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

 
const CustomUploadPicker = ({ title, placeholder, onFileSelected, isRequired  }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
 
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
 
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{title}
      {isRequired && <Text style={{ color: 'red' }}>*</Text>}</Text>
      <View style={styles.placeholderContainer}>
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
      {selectedFile && (
        <View style={styles.actionContainer}>
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
    width: '100%',
  },
  heading: {
    marginBottom: 3,
    fontSize: 13,
    fontWeight: 'bold',
    color: '#00408F',
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
  iconContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    marginHorizontal: 10,
  },
 
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal:10,
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