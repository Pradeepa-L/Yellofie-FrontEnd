import React, { useState} from 'react';
import {
    TextInput,
    StyleSheet,
    View,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
    Text,
    TouchableHighlight} from 'react-native';

    import * as SecureStore from 'expo-secure-store';
 

const  CreateComment =()=>{
 
const [comment,setText] = useState(" ")
const[enable,setenable] = useState(false)
        
const Save = async ()=>{
        const token = await SecureStore.getItemAsync('token')        
        var id = "5f756ef59654411948df28cd"
        fetch("http://192.168.43.18:3200/api/comment",{
            method:"POST",
            headers: {
             'Content-Type': 'application/json',
             'Authorization': token
           },
           body:JSON.stringify({
             "comment":comment,
             "id":id
           })
          })
          .then(res=>
            res.json())
         .then(data=>{
          setText("")
          console.log(data)
        })
        .catch((err)=>{
        console.log(err)
        })
      }


return(
        <KeyboardAvoidingView
         behavior ="position" enabled={enable}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View  >
          <Text style={{marginTop:5,marginLeft:15,color:"#708090"}}>View All Comments</Text>
          <View style={{flex:1,flexDirection:"row"}}>
            <View >
        <TextInput
        style={styles.comment}
        placeholder=" Add a Comment here..."
        onChangeText={Text => setText(Text)}
        onFocus={()=>setenable(true)}
        clearButtonMode="always"
       />
       </View>
       <View>
      <TouchableHighlight onPress={Save}>
        <View style={styles.button}>
          <Text>Post</Text>
        </View>
      </TouchableHighlight>
      </View>
      </View>
        </View>
  </TouchableWithoutFeedback> 
  </KeyboardAvoidingView>   
    )
  
}
export default CreateComment


const styles = StyleSheet.create({
comment:{
  height: 40,
  width:290,
  borderColor:"#3b3b3b",
  padding:10 ,
  borderWidth:1,
  marginTop:5,
  marginLeft:5,
  marginRight:5,
  borderRadius:20}
,
button: {
  alignItems: "center",
  backgroundColor: "#DDDDDD",
  padding: 10,
  marginTop:5,
  borderRadius:9
}

})
