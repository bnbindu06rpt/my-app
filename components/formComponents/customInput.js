
// import { View, Text, TextInput, StyleSheet } from "react-native";
// import PhoneInput from 'react-native-phone-input'; // Import PhoneNumberInput component

// export default function CustomInput ({ title, placeholder, onChange, value, errors, readOnly, inputType, isRequired }) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>
//         {title}
//         {isRequired && <Text style={{ color: 'red' }}>*</Text>}
//       </Text>
//       {inputType === 'phone' ? ( // Check if inputType is phone
//         <PhoneInput
//           initialCountry={'in'}
//           initialValue={value} // Pass value as initialValue
//           onChangePhoneNumber={onChange} // Pass onChange as onChangePhoneNumber
//           style={styles.input}
//           textProps={{
//             placeholder: placeholder
//           }}
//         />
//       ) : (
//         <TextInput
//           style={styles.input}
//           onChangeText={onChange}
//           value={value}
//           placeholder={placeholder}
//           readOnly={readOnly}
//           keyboardType={inputType}
//         />
//       )}
      
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginBottom: 12,
//   },
//   label: {
//     marginBottom: 3,
//     fontSize: 13,
//     fontWeight: 'bold',
//     color:'#00408F'
//   },
//   input: {
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     paddingVertical: 7,
//     paddingHorizontal: 10,
//     fontSize: 12,
    
//   },
//   error: {
//     color: 'red',
//     fontSize: 10,
//   },
// });

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from "react-native";
import PhoneInput from 'react-native-phone-number-input';

export default function CustomInput({ title, placeholder, onChange, value, errors, readOnly, inputType, isRequired }) {
  const [phoneNumber, setPhoneNumber] = useState(value || '');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {title}
        {isRequired && <Text style={{ color: 'red' }}>*</Text>}
      </Text>
      {inputType === 'phone' ? (
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
      ) : (
        <TextInput
          style={styles.input}
          onChangeText={onChange}
          value={value}
          placeholder={placeholder}
          editable={!readOnly}
          keyboardType={inputType}
        />
      )}
      {errors && <Text style={styles.error}>{errors}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  label: {
    marginBottom: 3,
    fontSize: 13,
    fontWeight: 'bold',
    color: '#00408F'
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 7,
    paddingHorizontal: 10,
    fontSize: 12,
  },
  error: {
    color: 'red',
    fontSize: 10,
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
  phoneContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  }
});
