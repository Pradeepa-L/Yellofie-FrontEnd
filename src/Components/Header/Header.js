import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.head}>
               <Text style={styles.headerText}>Feed</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header:{
        height:80,
          paddingTop:38,
          backgroundColor:'#fff',
          alignItems:'center',
          justifyContent:'center',
          borderRadius:2,
          borderBottomColor:'#bbb',
          borderBottomWidth:3
      },
      headerText:{
          fontWeight:'bold',
          fontSize:20,
          color:'black',
          letterSpacing:1
      },
      head:{
          
      }
})