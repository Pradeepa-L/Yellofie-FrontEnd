import React,{useState} from 'react';
import { Button ,TextInput} from 'react-native-paper';
import {
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView
} from 'react-native';
import * as SecureStore from 'expo-secure-store';

const SignupScreen = ({navigation}) => {

  const [email,setEmail] = useState('');
  const [password,setPassword]=useState('')

  const sendCred= async ()=>{
     console.log(email,password)
     fetch("http://192.168.43.18:3200/api/user/login",{
       method:"POST",
       headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        "email":email,
        "password":password
      })
      })
     .then(res=>
        res.json())
        .then(async (data)=>{
          const value = data.token;
          await SecureStore.setItemAsync('token', value)
          console.log(data)
          navigation.push('Feed')
          
        })
        .catch(err=> console.log(err))
  }
  return (
   <> 
   <KeyboardAvoidingView behavior="padding">
     <StatusBar backgroundColor="blue" barStyle="light-content" />

      <Text style={{fontSize:28,marginLeft:48,marginTop:10,color:"#3b3b3b",alignItems:"center"}}>
        Welcome to Yellofie
      </Text>

      <Text  style={{fontSize:20,marginLeft:150,marginTop:20,justifyContent:"center"}}>
        Login
      </Text>

      <TextInput
        label='Email'
        mode="outlined"
        value={email}
        style={{marginLeft:18,marginRight:18,marginTop:18}}
        theme={{colors:{primary:"blue"}}}
        onChangeText={(text)=>setEmail(text)}
     
      />
      <TextInput
        label='password'
        mode="outlined"
        secureTextEntry={true}
        value={password}
        onChangeText={(text)=>{setPassword(text)}}
        style={{marginLeft:18,marginRight:18,marginTop:18}}
        theme={{colors:{primary:"blue"}}}
     
      />
      <Button 
        mode="contained"
        style={{marginLeft:18,marginRight:18,marginTop:18}}
       onPress={sendCred}>
        signup
      </Button>
      
      </KeyboardAvoidingView>
   </>
  );
};
export default SignupScreen;