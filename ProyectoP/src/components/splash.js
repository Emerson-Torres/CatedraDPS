import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import Constants from 'expo-constants';
import { StyleSheet, Text, View, TextInput, ImageBackground, ScrollView, Image } from 'react-native';
import SelectList from 'react-native-dropdown-select-list';

const Splash = () => {

    /*
         <TextInput style={styles2.inputtext}   placeholderTextColor="white"  placeholder="Cantidad a llevar" />
         
         <TouchableHighlight   style={styles2.boton}><Text style={styles2.textbtn}>Enviar</Text></TouchableHighlight>
        
   */

    return (
        <View style={styles2.container}>
            <ImageBackground source={require('../../assets/fondosplash3.jpg')} resizeMode="cover" style={styles2.image}>
            <Text style={styles2.text1}>Bienvendido</Text>
            <View style={styles2.containerimg}>
                
            <Image source={require('../../assets/logo.png')} style={styles2.logobigshop} />
            </View>
            </ImageBackground>
        </View>
    )
}
const styles2 = StyleSheet.create({
    container: {
        flex: 1,
    }, image: {
        flex: 1,
        
    }
    ,containerimg:{
        justifyContent: "center",
        alignItems: "center",
        marginTop:"25%"
    }
    ,logobigshop:{
        height:200,
        width:200,
        borderRadius:100,
        borderWidth:5,
        borderColor:"white"
    },
    text1:{
        fontWeight:"bold",
        fontSize:40,
        textAlign:'center',
        color:"white",
        marginBottom:20,
        marginTop:"15%"
    }

});

export default Splash