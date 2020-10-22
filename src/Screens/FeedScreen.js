import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native';
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
            <View>
                <Image source={require('../../assets/dsc.png')}/>
            </View>
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
})
