import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { CsbBank } from "../../assets/images/assets";
import { router } from 'expo-router';
 
const Header = ({ backPath }) => {
    const handleBackPress = () => {
      // Logic for back button press
      router.navigate(backPath);
    };
 
    const goToHome = () => {
      router.navigate('screens/listOfApplications');
    };
 
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Image source={CsbBank} style={styles.logo} />
        <TouchableOpacity onPress={goToHome}>
          <Entypo name="home" size={24} color="white" />
        </TouchableOpacity>
      </View>
    );
  };
 
  const styles = StyleSheet.create({
    header: {
      width: '100%',
      height: 60,
      backgroundColor: '#00408F',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
    },
    logo: {
      width: 140,
      height: 40,
    },
  });
 
  export default Header;