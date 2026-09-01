import { StyleSheet, Text, View } from 'react-native';

interface PropiedadesTimer {
  tiempo: number; // tiempo en segundos
}

export default function Timer({ tiempo }: PropiedadesTimer) {

    const tiempoFormateado = `${Math.floor(tiempo / 60).toString().padStart(2, '0')}:${(tiempo % 60).toString().padStart(2, '0')}`;

    return (
        <View style={estilos.contenedorTemporizador}>
            <Text style={estilos.tiempo}>{tiempoFormateado}</Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    contenedorTemporizador: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50,
        borderRadius: 50,
        backgroundColor: '#f0f0f0',
        marginBottom: 20
    },
    tiempo: {
        fontSize: 60,
        fontWeight: 'bold',
        color: '#1a17c2',
        textAlign: 'center',
    },
});
