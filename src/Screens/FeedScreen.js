import React from 'react'
import { StyleSheet, Text,ScrollView,View,Image } from 'react-native';
import Header from '../Components/Header/Header';
import Icon from 'react-native-vector-icons/FontAwesome';

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
            <ScrollView><View>
                <Image source={require('../../assets/dsc.png')}/>
               
      </View>
      <View style={styles.info}> 
           <Text></Text>
            <Icon  name="heart" size={30} color="black" style={{ position:"absolute", left:20 }}/>  
         
            <Icon name="comment" size={30} color="black"  style={{ position:"absolute", left:60 }} />

            <Icon name="tag" size={30} color="black" style={{ position:"absolute", right:10 }} />
          
        </View>
        <Text></Text>
        <Text>75011 likes</Text>
        <Text>amazing_boutique brigtte brianna ruffle skirt</Text>
      
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
         alignItems: 'center',
          justifyContent: 'center',
          backgroundColor:"#fff"
      },
      imageicon:{
        width:300,
         height:350,
         margin:5,
       
      },
      icons:{
        width:40,
        height:40,
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
