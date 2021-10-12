import React,{useState,useRef,useContext} from 'react';
import {View, Text, StyleSheet, Dimensions,TextInput, Alert} from 'react-native'
import {colors, parameters,title} from "../../global/styles"
import * as Animatable from 'react-native-animatable'
import {Icon, Button,SocialIcon} from 'react-native-elements'
import { Formik } from 'formik';
import Header from '../../components/Header'
import auth from '@react-native-firebase/auth'
import { SignInContext } from '../../contexts/authContext';

export default function SignInScreen({navigation}){

    const {dispatchSignedIn} = useContext(SignInContext)

    const[textInput2Fossued, setTextInput2Fossued] =useState(false)
    const textInpput1 = useRef(1)
    const textInput2 = useRef(2)


async function signIn(data){
    try{
    const {password,email} = data
    const user = await auth().signInWithEmailAndPassword(email,password)
    if(user){
        dispatchSignedIn({type:"UPDATE_SIGN_IN",payload:{userToken:"signed-in"}})
    }
}
    catch(error){
        Alert.alert(
            error.name,
            error.message
        )
    }

}



    return(
        <View style ={styles.container}>

           
             <Header title ="MY ACCOUNT"  type ="arrow-left" navigation ={navigation}/>  

             <View style ={{marginLeft:20, marginTop:10}}>
                 <Text style ={title}>Sign-In</Text>
             </View> 

            <View style ={{alignItems:"center",marginTop:10}}>
                <Text style= {styles.text1} >Please enter the email and password</Text>
                <Text style= {styles.text1} >registered with your account</Text> 
            </View>


            <Formik 
                initialValues = {{email:'',password:''}}
                onSubmit = {(values)=>{
                           signIn(values)
   
                        }}
                    >
                    { (props)=>(
                <View>
                <View style ={{marginTop:20}}>
                <View>
                    <TextInput 
                      style ={styles.TextInput1}
                      placeholder ="Email"
                      ref ={textInpput1}
                      onChangeText = {props.handleChange('email')}
                      value ={props.values.email}
                    />
                </View>



                <View style ={styles.TextInput2}>
                <Animatable.View animation ={textInput2Fossued?"":"fadeInLeft"} duration={400} >
                    <Icon 
                        name ="lock"
                        iconStyle ={{color:colors.grey3}}
                        type ="material"
                        style={{}}
                      
                        
                    />
                </Animatable.View>

                     <TextInput 
                      style= {{flex:1}}
                      placeholder ="Password"
                      ref ={textInput2}
                      onFocus ={()=>{
                          setTextInput2Fossued(false)
                      }}

                      onBlur ={()=>{
                          setTextInput2Fossued(true)
                      }}
                      onChangeText = {props.handleChange('password')}
                      value = {props.values.password}
                    />

                <Animatable.View animation ={textInput2Fossued?"":"fadeInLeft"} duration={400} >
                     
                        <Icon 
                                name ="visibility-off"
                                iconStyle ={{color:colors.grey3}}
                                type ="material"
                                style={{marginRight:10}}
                                
                            />

                </Animatable.View>
                </View>

            </View>

            <View style ={{marginHorizontal:20, marginTop:30}}>
                <Button 
                    title ="SIGN IN"
                    buttonStyle = {parameters.styledButton}
                    titleStyle = {parameters.buttonTitle}
                        onPress ={props.handleSubmit}
                   />
            </View>  
            </View>
                    )}
        </Formik>


           

            <View style ={{alignItems:"center",marginTop:15}}>
                <Text style ={{...styles.text1, textDecorationLine:"underline"}}> Forgot Password ?</Text>
            </View> 

            <View style ={{alignItems:"center",marginTop:30, marginBottom:30}}>
                <Text style ={{fontSize:20, fontWeight:"bold"}}>OR</Text>
            </View>    

            <View style ={{marginHorizontal:10,marginTop:10}}>
                <SocialIcon 
                        title ="Sign In With Facebook"
                        button
                        type ="facebook"
                        style ={styles.SocialIcon}
                        onPress ={()=>{}}
                    />
            </View>     

            <View style ={{marginHorizontal:10,marginTop:10}}>
                <SocialIcon 
                        title ="Sign In With Google"
                        button
                        type ="google"
                        style ={styles.SocialIcon}
                        onPress ={()=>{}}
                    />
            </View> 

            <View style ={{marginTop:25,marginLeft:20}}>
                <Text style ={{...styles.text1,}}>New on XpressFood ?</Text>
            </View>           


            <View style ={{alignItems:"flex-end",marginHorizontal:20}}>
                <Button 
                    title ="Create an account"
                    buttonStyle ={styles.createButton}
                    titleStyle ={styles.createButtonTitle}
                    onPress ={()=>{navigation.navigate("SignUpScreen")}}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex:1
    },

    text1:{
        color:colors.grey3,
        fontSize:16
    },

    TextInput1:{
        borderWidth:1,
        borderColor:"#86939e",
        marginHorizontal:20,
        borderRadius:12,
        marginBottom:20,
        paddingLeft:15
      },

      TextInput2:{
        borderWidth:1,
         borderRadius:12,
         marginHorizontal:20,
         borderColor:"#86939e",
         flexDirection:"row",
         justifyContent:"space-between",
         alignContent:"center",
         alignItems:"center",
         paddingLeft:15
  
      },

      SocialIcon :{
        borderRadius :12,
        height:50
      },

      createButton:{
        backgroundColor:"white",
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1, 
        borderColor:"#ff8c52",
        height:40,
        paddingHorizontal:20,
      },

      createButtonTitle:{
        color:"#ff8c52",
        fontSize:16,  
        fontWeight:"bold" ,
        alignItems:"center",
        justifyContent:"center"  ,
        marginTop:-3
      }


    
})