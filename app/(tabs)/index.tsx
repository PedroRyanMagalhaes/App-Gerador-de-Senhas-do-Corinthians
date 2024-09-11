import {useState} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Slider from '@react-native-community/slider'

export default function  App(){
  const [size, setSize] = useState (10)



  return (
    <View style={styles.container}>
      <Image
      source={require(`@/assets/images/logo.png`)}
      style= {styles.logo}
      />
     <Text style = {styles.toptext}>By Pedro Programador</Text>
     <Text style={styles.title}> {size}</Text>

    <View style={styles.area}>
      <Slider 
      style={{ height: 50}}
      minimumValue={6}
      maximumValue={20}
      maximumTrackTintColor='red'
      minimumTrackTintColor='blue'
      thumbTintColor='blue'
      />
    </View>
      <TouchableOpacity style= {styles.button}>
        <Text style= {styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#F3F3FF",
    justifyContent: 'center',
    alignItems:'center'
  },
  toptext: {
    textAlign: "center",
    position: "absolute",
    top: 50,
    fontWeight: 'bold',
    marginBottom: 28
  },
  logo:{
    marginBottom: 60
  },
  area:{
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 6,
  },
  button:{
    backgroundColor: "blue",
    width: "80%",
    top: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8
  },
  buttonText:{
    color: "#FFF",
    fontSize:20
  },
  title:{
    fontSize: 20,
    fontWeight: "bold"
  }

})