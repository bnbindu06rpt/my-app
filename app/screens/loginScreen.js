// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   Alert,
//   ScrollView,
//   KeyboardAvoidingView,
//   Platform
// } from "react-native";
// import { router } from "expo-router";
// import * as SecureStore from 'expo-secure-store';
// import CheckNetwork from "../../components/customComponents/checkNetwork";
// import { CsbBank } from "../../assets/images/assets";
// import { authCredentials, AUTH_URL } from "../config";
// import { themeColor, wrapColor, containerColor } from "../../constants/constants";
 
// const LoginScreen = ({ navigation }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [token, setToken] = useState('');
 
//   const getToken = async (username, password) => {
//     await SecureStore.setItemAsync("username", username);
 
 
//     //const AUTH_URL = "https://ven06798.service-now.com/oauth_token.do";
//     const authData = new URLSearchParams();
//     authData.append('client_secret', authCredentials.client_secret);
//     authData.append('client_id', authCredentials.client_id);
//     authData.append('grant_type', authCredentials.grant_type);
//     authData.append('username', username);
//     authData.append('password', password);
 
//     try {
//       const res = await fetch(AUTH_URL, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: authData.toString()
//       });
 
//       const data = await res.json();
//       const accessToken = data.access_token;
 
//       const stoken = JSON.stringify({ accessToken: accessToken });
//       await SecureStore.setItemAsync("token", stoken);
 
   
//       if (accessToken) {
//        router.replace('/screens/applicantsList')
//       } else {
//         Alert.alert("Incorrect username or password!")
//         router.replace('/screens/applicantsList')
//       }
 
//       setToken(token);
 
//     } catch (e) {
//       console.log(e);
//       Alert.alert("failed to login")
//     }
//   }
 
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.inner}>
//         <CheckNetwork />
//         <Image
//           source={CsbBank} // Replace with your top image URL
         
//         />
//         <View style={styles.wrapper}>
//           <Text style={styles.title}>
//             Please enter your email ID & password
//           </Text>
//           <View style={styles.inputWrapper}>
//             <Text style={styles.label}>Username</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter username"
//               value={username}
//               onChangeText={(text) => setUsername(text)}
//             />
//           </View>
//           <View style={styles.inputWrapper}>
//             <Text style={styles.label}>Password</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter password"
//               secureTextEntry
//               value={password}
//               onChangeText={(text) => setPassword(text)}
//             />
//           </View>
//           <TouchableOpacity onPress={() => Alert.alert('Forget Password pressed')} style={styles.forgetPasswordContainer}>
//     <Text style={styles.forgetPassword}>Forget Password?</Text>
//   </TouchableOpacity>
//           <View style={styles.button}>
//             <Button
//               color={themeColor}
//               title="LOGIN"
//               onPress={() => getToken(username, password)}
//             />
//           </View>
//           <View style={styles.logoContainer}>
//             <Image
//               source={{ uri: "https://i.postimg.cc/FskjFB0Y/rpt.jpg" }} // Replace with your logo image URL
//               style={styles.logoImage}
//             />
//           </View>
//         </View>
//       </KeyboardAvoidingView>
//     </ScrollView>
//   );
// };
 
// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     backgroundColor: containerColor,
//     padding: 20,
//   },
//   inner: {
//     flex: 1,
//     alignItems: 'center',
   
 
//   },
//   wrapper: {
//     width: "100%",
//     backgroundColor: wrapColor,
//     padding: 20,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     elevation: 5,
//     marginTop: 40,
//   },
 
//   forgetPasswordContainer: {
//     alignSelf: 'flex-end',
//   },
 
//   title: {
//     fontSize: 18,
//     marginBottom: 20,
//     textAlign: "center",
//     fontWeight: "600",
//     color: "#333",
//   },
//   inputWrapper: {
//     marginBottom: 15,
//   },
//   label: {
//     marginBottom: 5,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   input: {
//     borderBottomWidth: 1,
//     borderColor: "#bbb",
//     paddingHorizontal: 5,
//     paddingVertical: 10,
//     backgroundColor: "#fff",
//     borderRadius: 5,
//   },
//   forgetPassword: {
//     color: "#023B5E",
//     textAlign: "right",
//     marginBottom: 20,
//   },
 
//   logoContainer: {
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   logoImage: {
//     width: 150,
//     height: 50,
//     resizeMode: "contain",
//   },
// });
 
// export default LoginScreen;

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { router } from "expo-router";
import * as SecureStore from 'expo-secure-store';
import CheckNetwork from "../../components/customComponents/checkNetwork";
import { CsbBank } from "../../assets/images/assets";
import { authCredentials, AUTH_URL } from "../config";
import { themeColor, wrapColor, containerColor } from "../../constants/constants";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState('');

  const getToken = async (username, password) => {
    await SecureStore.setItemAsync("username", username);

    const authData = new URLSearchParams();
    authData.append('client_secret', authCredentials.client_secret);
    authData.append('client_id', authCredentials.client_id);
    authData.append('grant_type', authCredentials.grant_type);
    authData.append('username', username);
    authData.append('password', password);

    try {
      // const res = await fetch(AUTH_URL, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/x-www-form-urlencoded',
      //   },
      //   body: authData.toString()
      // });

      // const data = await res.json();
      // const accessToken = data.access_token;

      // const stoken = JSON.stringify({ accessToken: accessToken });
      // await SecureStore.setItemAsync("token", stoken);

      // if (accessToken) {
        router.replace('/screens/listOfApplications');
      // } else {
      //   Alert.alert("Incorrect username or password!");
      //   router.replace('/screens/listOfApplications');
      // }

      //setToken(token);

    } catch (e) {
      console.log(e);
      router.replace('/screens/listOfApplications');
      Alert.alert("failed to login");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.inner}>
        <CheckNetwork />
        <Image
          source={CsbBank} // Replace with your top image URL
          style={styles.topImage}
        />
        <View style={styles.wrapper}>
          <Text style={styles.title}>
            Please enter your email ID & password
          </Text>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter username"
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter password"
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <TouchableOpacity onPress={() => Alert.alert('Forget Password pressed')} style={styles.forgetPasswordContainer}>
            <Text style={styles.forgetPassword}>Forget Password?</Text>
          </TouchableOpacity>
          <View style={styles.button}>
            <Button
              color={themeColor}
              title="LOGIN"
              onPress={() => getToken(username, password)}
            />
          </View>
          <View style={styles.logoContainer}>
            <Image
              source={{ uri: "https://i.postimg.cc/FskjFB0Y/rpt.jpg" }} // Replace with your logo image URL
              style={styles.logoImage}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: containerColor,
    padding: 20,
  },
  inner: {
    flex: 1,
    alignItems: 'center',
  },
  wrapper: {
    width: "100%",
    backgroundColor: wrapColor,
    padding: 50,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginTop: 40,
  },
  forgetPasswordContainer: {
    alignSelf: 'flex-end',
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "600",
    color: "#333",
  },
  inputWrapper: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontWeight: "bold",
    color: "#333",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#bbb",
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  forgetPassword: {
    color: "#023B5E",
    textAlign: "right",
    marginBottom: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  logoImage: {
    width: 150,
    height: 50,
    resizeMode: "contain",
  },
  topImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});

export default LoginScreen;
