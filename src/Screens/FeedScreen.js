import React from 'react'
import { StyleSheet, Text, View,Image,KeyboardAvoidingView,ScrollView} from 'react-native';
import Header from '../Components/Header/Header';
import Comment from '../Components/Comment/comment'



export default function FeedScreen () {
    return (
     <KeyboardAvoidingView 
     behavior ="position" style={styles.container}>
     <ScrollView>
     <View>
     <Header/>
     <View style={styles.textview}>
     <View>
    <Image source={require('../../assets/logo.png')} style={styles.img}/></View>
    <View style={styles.imgtext}>
    <Text style={{fontSize:20,fontWeight:'400'}}>Amazing Boutique</Text>
    <Text style={{fontSize:16,fontWeight:'700'}}>Location, City</Text></View>
    </View>
    <View>
    <Image source={require('../../assets/dsc.png')}/>
    <Comment/>
    </View>
    </View>  
    </ScrollView> 
     </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    textview:{
        flexDirection:'row'
    },
    img:{
        height:80,
        width:50,
        marginLeft:20
    },
    imgtext:{
        marginLeft:30,
        marginTop:20,
    },
})
