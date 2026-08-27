import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './componentes/Timer';
import Header from './componentes/Header';
import Informe from './componentes/Informe';

const colores =['#f7dc6f','#a2d9ce','#d7bde2']

export default function App() {

  const [time, setTime] = useState(25 * 60); // 25 minutos en segundos
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isActive, setIsActive] = useState(false); // Guarda si el reloj esta corriendo o pausado.
  const backgroundColor = colores[currentTime] ?? '#f7dc6f'; // Si no hay color seleccionado, usamos un color por defecto.

  useEffect(() => {
    // Si el reloj no esta activo, no se crea ningun contador.
    if (!isActive) {
      return;
    }

    // setInterval ejecuta este codigo cada 1000 milisegundos, es decir, cada 1 segundo.
    const interval = setInterval(() => {
      setTime((previousTime) => {
        // Cuando llega a 0, detenemos el reloj para que no siga bajando a numeros negativos.
        if (previousTime <= 1) {
          setIsActive(false);
          return 0;
        }
        // Restamos 1 segundo al tiempo anterior.
        return previousTime - 1;
      });
    }, 1000);

    // Esta limpieza evita que queden varios contadores corriendo al mismo tiempo.
    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <Text style={styles.titulo}>Pomodoro</Text>
      {/* <Text style={styles.titulo}>25:00</Text> */}
      <Header
        setTime={setTime}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
        setIsActive={setIsActive}
      />
      <Timer time={time} />
      <Informe />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#342571',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo: {
    fontSize: 50,
    fontWeight: 'black',
  },
});
