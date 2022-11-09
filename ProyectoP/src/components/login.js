import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import Constants from 'expo-constants';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert, ScrollView, Image } from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase-config';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Login = () => {

    /*
         <TextInput style={styles2.inputtext}   placeholderTextColor="white"  placeholder="Cantidad a llevar" />
         
         <TouchableHighlight   style={styles2.boton}><Text style={styles2.textbtn}>Enviar</Text></TouchableHighlight>
        
   */

         const navigation= useNavigation();
         const[email, setEmail]=useState("");
         const[password, setPassword]=useState("");
         const funcionVer=()=>{
            Alert.alert("los datos ingresados son estos:"+ password +" y "+ email);
         }

         const app =  initializeApp(firebaseConfig);
         const auth = getAuth(app);
         
         const handleCreateAccount = () =>{
         
            createUserWithEmailAndPassword(auth,email, password)
            .then(()=>{
                console.log("cuenta creada")
               
            })
            .catch(error=>{
                console.log("algo salio mal al crear la cuenta")
                
            })
            
         }

         const handleSignIn = () =>{
         
            signInWithEmailAndPassword(auth,email, password)
            .then((userCredential)=>{
                console.log("Buen inicio de sesion")
                const user = userCredential.user;
                console.log(user.email)
                if(user.email =="emertotosito@gmail.com"){
                    navigation.navigate("HomeAdmin");
                }else{
                    navigation.navigate("Home");
                }
                
            })
            .catch(error=>{
                console.log("algo salio mal al iniciar la cuenta")
                navigation.navigate("Login");
            })
            
         }

    return (
        <View>
            <View style={styles2.container3}>
                <Text style={styles2.text}>BigShop</Text>
                <Image source={require('../../assets/logo.png')} style={styles2.logobigshop} />
            </View>
            <View style={styles2.containerimg}>
                <Image source={require('../../assets/key-person.png')} style={styles2.imagelogo} />
            </View>
            <View>
                <View style={styles2.containerform}>
                <Text style={styles2.textlogin}>Loguin</Text>
                    <View style={styles2.containerimputs}>
                        <TextInput style={styles2.inputtext1} placeholderTextColor="black" onChangeText={text => setEmail(text)}  placeholder="Ingrese su usuario" />
                        <TextInput style={styles2.inputtext2} secureTextEntry={true} onChangeText={text2 => setPassword(text2)} placeholderTextColor="black"  placeholder="Ingrese su contraseña" />
                        <TouchableHighlight onPress={handleSignIn} style={styles2.boton}><Text style={styles2.textbtn}>Loguin</Text></TouchableHighlight>
                        <TouchableHighlight onPress={handleCreateAccount} style={styles2.boton}><Text style={styles2.textbtn}>Registro</Text></TouchableHighlight>
                    </View>
                </View>
                
            </View>
        </View>
    )
}
const styles2 = StyleSheet.create({
    container3: {
        backgroundColor: '#649962',
        flexDirection:'row',
         
        height:80,
       
    },logobigshop:{
        height:70,
        width:70,
        borderRadius:100,
        marginLeft:"40%",
        marginTop:5
    },
    text: {
       marginLeft:25,
       marginTop:"4%",
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
        
    },
    textlogin: {
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom:30
    },
    boton: {
        height: 40,
        paddingTop: 10,
        textAlign: 'center',
        backgroundColor: '#0d6efd',
        borderRadius: 10,
        borderWidth: 2,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop:40
    },
    textbtn: {
        textAlign: "center",
        color: "white",
        fontWeight: 'bold'
    }, imagelogo: {
        height: 150,
        width: 150
    }, containerimg: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50
    }, containerform: {
        justifyContent: "center",
        alignItems: "center",
        marginTop:50
    },containerimputs:{
        width:350,
    },inputtext1: {
        borderColor: "gray",
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        textAlign:'center'
    },inputtext2: {
        borderColor: "gray",
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        textAlign:'center',
        marginTop:40
    },

});

export default Login