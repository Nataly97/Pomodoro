import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './componentes/Timer';

export default function App() {

  const [time, setTime] = useState(5 * 60); // 25 minutos en segundos

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pomodoro</Text>
      {/* <Text style={styles.titulo}>25:00</Text> */}
      <Timer time={time} />
      <StatusBar style="auto" />
      <StatusBar style="auto" />
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
  titulo: {
    fontSize: 50,
    fontWeight: 'black',
  },
});
