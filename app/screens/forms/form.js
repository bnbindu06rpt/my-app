import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { View, Button, TouchableOpacity, Text } from 'react-native';
import FormField from './formField';
import { themeColor } from '../../../constants/constants';
import { ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { Ionicons } from '@expo/vector-icons';
 
const Form = ({ elements, onSubmit, handleCheckboxChange,   setFormValues, formValues, networkConnect  }) => {
  const { control, handleSubmit } = useForm({defaultValues:formValues});
  const [collapsedSections, setCollapsedSections] = useState({});
 
  useEffect(() => {
    const groupedElements = elements.reduce((acc, field) => {
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
  }, [elements]);
 
  const toggleSection = (section) => {
    setCollapsedSections({
      ...collapsedSections,
      [section]: !collapsedSections[section],
    });
  };
 
  const renderSection = (sectionName, fields) => (
    <View key={sectionName}>
      <TouchableOpacity onPress={() => toggleSection(sectionName)}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{sectionName}</Text>
          <Ionicons
            name={collapsedSections[sectionName] ? 'chevron-down' : 'chevron-up'}
            size={20}
            color="black"
          />
        </View>
      </TouchableOpacity>
      <Collapsible collapsed={collapsedSections[sectionName]}>
        {fields.map((field) => (
          <FormField key={field.name} control={control} {...field} handleCheckboxChange={elements.type === 'checkbox' ? handleCheckboxChange : null} networkConnect={networkConnect} />
        ))}
      </Collapsible>
    </View>
  );
 
  const groupedElements = elements.reduce((acc, field) => {
    const section = field.section || 'General';
    if (!acc[section]) {
      acc[section] = [];
    }
    acc[section].push(field);
    return acc;
  }, {});
 
  return (
    <ScrollView>
      <View style={styles.container}>
        {Object.keys(groupedElements).map((sectionName) =>
          renderSection(sectionName, groupedElements[sectionName])
        )}
        <View style={styles.buttonContainer}>
          <Button
            title="Save and Continue"
            onPress={handleSubmit(onSubmit)}
            color={themeColor}
          />
        </View>
      </View>
    </ScrollView>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  sectionHeader: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 20,
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
});
 
export default Form;