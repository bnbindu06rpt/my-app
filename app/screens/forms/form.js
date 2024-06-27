import React from 'react';
import { useForm } from 'react-hook-form';
import { View, Button } from 'react-native';
import FormField from './formField';
import { themeColor } from '../../../constants/constants';
import { ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';

const Form = ({ elements, onSubmit }) => {
  const { control, handleSubmit } = useForm();
//   const onSubmit = (data) => {console.log(data);}

  return (
    <ScrollView>
    <View style={styles.container}>
        <View style={styles.card}>
      {elements.map(field => (
        <FormField
          key={field.name}
          control={control}
          {...field}
        />
      ))}
      </View>
      <View style={styles.buttonContainer}>
      <Button title="Save and Continue" onPress={handleSubmit(onSubmit)} color={themeColor} />
      </View>
    </View>
    </ScrollView>
  );
};
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
})
export default Form;