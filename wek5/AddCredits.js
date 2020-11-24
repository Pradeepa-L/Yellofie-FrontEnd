import React,{useState} from 'react'
import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native'
// import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import RadioButton from '../components/RNRadioButton' 

const AddCretits = () => {
    const [key, setKey] = useState('defaultValue'); // const [gender, setGender] = useState(‘male’);
    const [option1, setOption1] = useState(true) // const [maleCheck, setMaleCheck) = useState(true);
    const [option2, setOption2] = useState(false);
  
    const [credits,setCredits]=useState('')
    const [creditsError,setCreditsError]=useState('')
    const [name,setName]=useState('')
    const [nameError,setNameError]=useState('')
    const [cvv,setCVV]= useState()
    const [cvvError,setCVVError]= useState()
    const [error,setError]=useState('')

    const onChangeName=(e)=>{
        setError('')
        if (e.length > 2) {
            setName(e);
            setNameError("");
          } else setNameError("Please Enter atleast 3 characters");
        }
        const onChangeCVV=(e)=>{
            setError('')
            if (e.length > 0) {
                setCVV(e);
                setCVVError("");
              } else setCVVError("Please Enter this Field");
             }
        

     const radioHandler = () => {
       //logic goes here
       if(option2){
         setOption2(false); //for avoiding multiple checks at a time;
         setKey(option1);
         setOption1(true);
         } else {
         setOption1(true);
         setKey(option1);
         }
        }
       const radioHandler2 = () => {
         if(option1){
         setOption1(false);
         setKey(option2);
         setOption2(true);
         } else {
         setKey(option2);
         setOption2(true);
         }
        }
   return (
        <View>
            <View style={styles.v1}> 
                 <Text style={styles.text}>Credit</Text>
                 <Text style={styles.text2}> (deposit in account) </Text>
            </View>
                 <TextInput placeholder="   credits" style={styles.input}/>
                 <View style={styles.radioView}>
                 <RadioButton checked={option1} onPress={radioHandler}/>
                 <Text>Bank of India card Ending in 4998</Text>
                    <View style={styles.cardView}>
                        <Text style={styles.text}>Name on Card</Text>
                        <TextInput placeholder="  Sample" style={styles.input}/>
                        <View style={styles.cvv}>
                         <Text style={styles.text}>Enter CVV</Text>
                         <TextInput placeholder="  CVV" style={styles.input}/>
                        </View>
                    </View></View>
                    <View style={styles.radioView}>
                 <RadioButton checked={option2} onPress={radioHandler2}/>
                 <Text>Add Another Card</Text></View>
                 <View style={styles.btn}>
             <TouchableOpacity>
                 <Text style={{alignItems:'center',justifyContent:'center'}}>Pay  Rs100</Text>
             </TouchableOpacity>
         </View>
        </View>
    )
}

export default AddCretits

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:30
    },
    input:{
        marginLeft:10,
        borderWidth:0.4,
        borderColor:'#B4B4B4',
        marginTop:10,
        height:50,
        width:'95%',
       justifyContent:'space-around',
     
    },
    radioView:{
        flexDirection:'row',
         marginTop:10
    },
    text:{
        marginLeft:10,
        marginTop:20,
       fontSize:16
    },
    text2:{
      color:'#B4B4B4',
       marginTop:20,
       marginRight:70
    },
    v1:{
        flexDirection:'row'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
    },
    cardView:{
      marginTop:10,
      marginLeft:-180    
    },
    cvv:{
        flexDirection:'row'
    },
    btn:{
        marginTop:130,
        borderBottomWidth:0.5,
        borderColor:'#fff',
        padding:20,
        width:'90%',
        alignItems:'center',
        justifyContent:'center',
        fontWeight:'bold',
        fontSize:16,
        elevation: 1,
        marginLeft:30
    
    }
})
