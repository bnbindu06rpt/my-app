import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const CustomCheckbox = ({ label, isChecked, onChange }) => {
  return (
    <TouchableOpacity onPress={() => onChange(!isChecked)}>
      <View style={styles.container}>
        <View style={[styles.checkbox, isChecked && styles.checked]}>
          {isChecked && <Text style={styles.checkmark}>✓</Text>}
        </View>
        {/* <Text style={styles.label}>{label}</Text> */}
      </View>
    </TouchableOpacity>
  );
};

export default CustomCheckbox;

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
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
};
