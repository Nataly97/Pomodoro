import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './componentes/Timer';
import Header from './componentes/Header';
import Informe from './componentes/Informe';

const colores =['#6f8ff7','#d7bde2','#a2d9ce']

export default function App() {

  const [tiempo, establecerTiempo] = useState(25 * 60); // 25 minutos en segundos
  const [tiempoActual, establecerTiempoActual] = useState<number>(0);
  const [estaActivo, establecerEstaActivo] = useState(false); // Guarda si el reloj esta corriendo o pausado.
  const colorFondo = colores[tiempoActual] ?? '#ea7ef0'; // Si no hay color seleccionado, usamos un color por defecto.

  useEffect(() => {
    // Si el reloj no esta activo, no se crea ningun contador.
    if (!estaActivo) {
      return;
    }

    // setInterval ejecuta este codigo cada 1000 milisegundos, es decir, cada 1 segundo.
    const intervalo = setInterval(() => {
      establecerTiempo((tiempoAnterior) => {
        // Cuando llega a 0, detenemos el reloj para que no siga bajando a numeros negativos.
        if (tiempoAnterior <= 1) {
          establecerEstaActivo(false);
          return 0;
        }
        // Restamos 1 segundo al tiempo anterior.
        return tiempoAnterior - 1;
      });
    }, 1000);

    // Esta limpieza evita que queden varios contadores corriendo al mismo tiempo.
    return () => clearInterval(intervalo);
  }, [estaActivo]);

  return (
    <View style={[estilos.contenedor, {backgroundColor: colorFondo}]}>
      <Text style={estilos.titulo}>Pomodoro</Text>
      {/* <Text style={estilos.titulo}>25:00</Text> */}
      <Header
        establecerTiempo={establecerTiempo}
        tiempoActual={tiempoActual}
        establecerTiempoActual={establecerTiempoActual}
        establecerEstaActivo={establecerEstaActivo}
      />
      <Timer tiempo={tiempo} />
      <Informe />
      <StatusBar style="auto" />
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
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
