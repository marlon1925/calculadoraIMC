import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setIMC] = useState('');



  let calculoIMC = () => {
    parseFloat(peso)
    parseFloat(altura)
    let estaturaMetros = altura / 100
    setIMC(parseFloat(peso) / (estaturaMetros * estaturaMetros));

    if (parseFloat(imc) < 18.5) {
      Alert.alert("IMC = " + imc, "Su peso es inferior al normal");
    } else if (parseFloat(imc) >= 18.5 && parseFloat(imc) < 25.0) {
      Alert.alert("IMC = " + imc, "Su peso es normal");
    } else if (parseFloat(imc) >= 25.0 && parseFloat(imc) < 30.0) {
      Alert.alert("IMC = " + imc, "Su peso es superior al normal");
    } else if (parseFloat(imc) >= 30.0) {
      Alert.alert("IMC = " + imc, "Usted tiene obesidad");
    }
  };

  let limpiar = () => {
    setAltura('')
    setPeso('')
    setIMC('')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>CALCULADORA IMC</Text>
      <TextInput
        style={styles.caja}
        value={altura}
        onChangeText={setAltura}
        placeholder='Ingrese la estatura en centímetros'
      />
      <TextInput
        style={styles.caja}
        value={peso}
        onChangeText={setPeso}
        placeholder='Ingrese Peso en Kilogramos'
      />
      <View style={styles.botones}>
      <Button title='Calcular'
        onPress={calculoIMC}
        />
      </View>

      <Button title='Limpiar'
        onPress={limpiar} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    marginHorizontal : 10

  },
  caja: {
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
  },
  titulo: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  botones : {
    marginBottom: 10
  }

});
