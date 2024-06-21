import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from "react-native";
import { Selected, UnSelected } from "../../assets/images/assets";
 
export default function RadioButton({ onSelect, radioButtonOptions }) {
  const [selectedData, setSelectedData] = useState('');
 
  const renderItems = ({ item }) => {
    const selectHandler = () => {
      setSelectedData(item);
      onSelect(item.label); // Pass the value instead of the whole item
    };
 
    return (
      <TouchableOpacity onPress={selectHandler} style={styles.radioButton}>
         <Image
          style={styles.image}
          source={selectedData && selectedData.label === item.label ? Selected : UnSelected}
          resizeMode="contain"
        />
        <Text style={styles.radioLabel}>{item.label}</Text>
       
      </TouchableOpacity>
    );
  };
 
  return (
    <View style={styles.radioButtonContainer}>
      <FlatList
        vertical
        data={radioButtonOptions}
        renderItem={renderItems}
        keyExtractor={(item) => item.label}
      />
    </View>
  );
}
 
const styles = StyleSheet.create({
  radioLabel: {
    fontSize: 14,
    fontWeight: '400',
    marginRight: 5,
    marginLeft:20,
   
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
   
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 40,
    marginTop: 16,
  },
  image: {
    width: 20,
    height: 20,
  },
});