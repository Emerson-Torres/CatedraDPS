import React from "react";
import { StatusBar } from 'react-native'
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert, ScrollView, Image } from 'react-native';


export default function Profile() {
  return (
    <View style={{  }}>
       <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#694fad" translucent = {true}/>
            <View>
            <View style={styles2.container3}>
                <Image source={require('../../assets/logo.png')} style={styles2.logobigshop} />
            </View>
            <View>
                <View style={styles2.containerform}>
                <Text style={styles2.textlogin}>Perfil del Usuario</Text>
                    <View style={styles2.containerimputs}>
                      <Text style={styles2.texto}>Nombre:</Text>
                        <TextInput style={styles2.inputtext1} placeholderTextColor="black"  placeholder="Your First Name" />
                        <Text style={styles2.texto}>Apellido:</Text>
                        <TextInput style={styles2.inputtext1} placeholderTextColor="black"  placeholder="Your Last Name" />
                        <Text style={styles2.texto}>Email:</Text>
                        <TextInput style={styles2.inputtext1} placeholderTextColor="black"  placeholder="Your Email" />
                        <TouchableHighlight style={styles2.boton}><Text style={styles2.textbtn}>Cerrar Sesion</Text></TouchableHighlight>
                    </View>
                </View>
                
            </View>
        </View>
    </View>
    
  );
}
const styles2 = StyleSheet.create({
  container3: {
      backgroundColor: '#649962',
      flexDirection:'row',
       marginTop:24,
      height:80,
     
  },logobigshop:{
      height:70,
      width:70,
      borderRadius:100,
      marginLeft:"40%",
      marginTop:5
  },texto:{
    height:20,
    marginTop:20,
    marginBottom:10,
    fontSize:15,
  },
  text: {
     marginLeft:25,
     marginTop:"4%",
      color: 'white',
      fontWeight: 'bold',
      fontSize: 30,
      fontFamily:'san serif'
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