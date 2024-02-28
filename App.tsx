import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {


const[nome, setNome] = useState<string>('');
const[idade, setIdade] =useState<number>(0);

function validarIdade()

{

  if(idade >= 18)
   alert("Voce é maior de idade");
  else  
  alert("voce não é maior de idade");
}




  return (
    <View style={styles.container}>
      <Text style = {styles.titleWelcome}>Seja bem vindo!</Text>
      <TextInput style = {styles.textInput}
      placeholder='Digite seu Nome:'
      onChangeText={(txtNome) => setNome(txtNome)}
      />

      <Text style = {styles.label}>Olá {nome}</Text>

      <TextInput style = {styles.textInput}
      placeholder= 'Digite sua idade'
      onChangeText={(txtIdade) => setIdade (parseInt(txtIdade))}
      keyboardType='numeric'
      />
      <Text> Idade {idade}</Text>
      <TouchableOpacity style= {styles.button} onPress ={validarIdade}>
        <Text style = {styles.textButton}>Validar</Text>
      </TouchableOpacity>
      <StatusBar style ="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  titleWelcome: {
   fontSize: 22


  },

  label: {
fontSize: 16,
marginTop: 10,
padding: 10


  },

  button: {
    backgroundColor: 'red',
    borderRadius: 5,
    marginTop:5,
    padding: 10,
  },
    textInput:{

fontSize: 16,
borderWidth:1,
borderColor: 'blue',
padding: 5,
marginTop:10,
borderRadius:5

    },

  textButton: {
      color: 'white',
      fontSize:16,
      fontWeight: 'bold'







  }


  




});
