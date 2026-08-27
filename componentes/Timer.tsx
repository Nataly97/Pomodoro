import { StyleSheet, Text, View } from 'react-native';

interface TimerProps {
  time: number; // tiempo en segundos
}

export default function Timer({ time }: TimerProps) {

    const FormatTiempo = `${Math.floor(time / 60).toString().padStart(2, '0')}:${(time % 60).toString().padStart(2, '0')}`;

    return (
        <View style={estilos.timerContainer}>
            <Text style={estilos.time}>{FormatTiempo}</Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    timerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50,
        borderRadius: 50,
        backgroundColor: '#f0f0f0',
        marginBottom: 20
    },
    time: {
        fontSize: 60,
        fontWeight: 'bold',
        color: '#1a17c2',
        textAlign: 'center',
    },
});
