
import React, { useState } from 'react';
import { StatusBar,StyleSheet,TextInput,TouchableHighlight ,Alert} from 'react-native'
import { Text } from "react-native";
import { View } from "react-native";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase-config';
import { collection, addDoc,getFirestore } from "firebase/firestore"; 
export default function Notifications() {
  const[nombre, setNombre]=useState("");
  const[precio, setPrecio]=useState(0.0);
  const[descripcion, setDescripcion]=useState("");
  const[imagen, setImagen]=useState("");
  const agregarProducto = async () =>{
         Alert.alert(nombre+precio+descripcion+imagen)
         const app = initializeApp(firebaseConfig);
         const db = getFirestore(app);
       
         await firebaseConfig.db.collection("users").add({
          first: "Ada",
          last: "Lovelace",
          born: 1815
      })
      .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
          console.error("Error adding document: ", error);
      });

         }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#694fad" translucent = {true}/>
      <View>
            
            <View>
                <View style={styles2.containerform}>
                <Text style={styles2.textlogin}>Agregar producto</Text>
                    <View style={styles2.containerimputs}>
                        <TextInput style={styles2.inputtext1} placeholderTextColor="black" onChangeText={text => setNombre(text)}  placeholder="Ingrese nombre del producto" />
                        <TextInput style={styles2.inputtext2}   placeholderTextColor="black"  onChangeText={text => setPrecio(text)} placeholder="Ingrese precio del producto" />
                        <TextInput style={styles2.inputtext2}   placeholderTextColor="black"  onChangeText={text => setDescripcion(text)}placeholder="Ingrese descripcion del producto" />
                              <TextInput style={styles2.inputtext2}   placeholderTextColor="black"  placeholder="Ingrese una imagen del producto" onChangeText={text => setImagen(text)} />
                        <TouchableHighlight  style={styles2.boton} onPress={agregarProducto} ><Text style={styles2.textbtn}>Agregar producto</Text></TouchableHighlight>
                        
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