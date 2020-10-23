import React from 'react'
import { StyleSheet, Text, View, ScrollView,Image, TouchableOpacity, Alert } from 'react-native';
import Header from '../Components/Header/Header';


export default function FeedScreen () {
    return (
        <View>
            <Header/>
            <View style={styles.textview}>
            <View>
            <Image source={require('../../assets/logo.png')} style={styles.img}/></View>
            <View style={styles.imgtext}>
            <Text style={{fontSize:20,fontWeight:'400'}}>Amazing Boutique</Text>
            <Text style={{fontSize:16,fontWeight:'700'}}>Location, City</Text></View>
            </View>
            
                
                <ScrollView>
                <Image source={require('../../assets/dsc.png')}/>
                <View style={styles.Img1}>
                <TouchableOpacity onPress={()=> alert('Product added to Wishlist')}>
                <Image source={require('../../assets/vector.png')}/>
                </TouchableOpacity>
                </View>
                </ScrollView>
            </View>
        
    )
}


const styles = StyleSheet.create({
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
    Img1:{
        marginLeft:365,
        marginTop:10
    }
})
