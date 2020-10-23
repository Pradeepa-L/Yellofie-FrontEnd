import React from 'react';
import { TextInput, StyleSheet,View} from 'react-native';
const  CreateComment = ()=>{
    return(
        <View style={styles.View1}>
        <View style={styles.View2}>
        <TextInput    style={styles.input}
        placeholder=" Add a Comment..." >
        </TextInput>
        </View>
  </View>     
    )
  
}
export default CreateComment
const styles = StyleSheet.create({
View1:{
    flexDirection:"row",
    marginTop:20,
    justifyContent:"center"
},
View2:{
    height:50,width:350
},
input:{
    borderWidth: 1,
    borderColor: "#dcdcdc",
    height:35,
    justifyContent:"center"
}

})
