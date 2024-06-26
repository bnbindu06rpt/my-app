// app/_layout.js
import { Stack } from 'expo-router';
import { FormProvider } from '../../formContext';
import { SQLiteProvider } from 'expo-sqlite/next';
import CheckNetwork from '../../../components/customComponents/checkNetwork';

export default function Layout() {

  return (
    <SQLiteProvider databaseName="formData.db" useSuspense>
      <CheckNetwork/>
    <FormProvider>
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="customerType" />
      <Stack.Screen name="addressDetailsForm" />
      <Stack.Screen name="personalDetailsForm" />
      <Stack.Screen name="review" />
    </Stack>
    </FormProvider>
    </SQLiteProvider>
  );
}