// app/_layout.js
import { Stack } from 'expo-router';
import { FormProvider } from '../../formContext';
import { SQLiteProvider } from 'expo-sqlite/next';

export default function Layout() {

  return (
    <SQLiteProvider databaseName="formData.db" useSuspense>
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