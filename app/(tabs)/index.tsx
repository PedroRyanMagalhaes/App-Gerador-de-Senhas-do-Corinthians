import {useState} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native'
import Slider from '@react-native-community/slider'
import {ModalPassword} from "@/components/modal/index"

let charset = "corinthiansCORINTHIANS0123456789"

export default function  App(){
  const [size, setSize] = useState (10)
  const [passwordValue, setPasswordValue] = useState ("")
  const [modalVisible, setModalVisible] = useState(false)

  function generatePassword (){
    
    let password = "";
    for (let i = 0, n = charset.length; i < size; i++){
      password += charset.charAt(Math.floor(Math.random() * n))
    }

    setPasswordValue(password)
    setModalVisible(true)
  }


  return (
    <View style={styles.container}>
      <Image
      source={require(`@/assets/images/corinthians.png`)}
      style= {styles.logo}
      />
     <Text style = {styles.toptext}>By Pedro Programador</Text>
     <Text style={styles.title}> {size}</Text>

    <View style={styles.area}>
      <Slider 
      style={{ height: 50}}
      minimumValue={6}
      maximumValue={20}
      maximumTrackTintColor='#FDB913'
      minimumTrackTintColor='black'
      thumbTintColor='black'
      value={10}
      onValueChange={(value) => setSize (Number(value.toFixed(0)))}
      />
    </View>
      <TouchableOpacity style= {styles.button} onPress={generatePassword}>
        <Text style= {styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      <Modal visible = {modalVisible} animationType='fade' transparent = {true}>
        <ModalPassword/>
      </Modal>
      
    </View>
  )
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
    marginBottom: 60,
    resizeMode: 'contain',
    width: 400,
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
    backgroundColor: "black",
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