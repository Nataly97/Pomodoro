import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const opciones = ["Pomodoro", "Descanso Corto", "Descanso Largo"];

interface HeaderProps {
    setTime: React.Dispatch<React.SetStateAction<number>>;
    currentTime: number;
    setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ setTime, currentTime, setCurrentTime, setIsActive }: HeaderProps) {

    const [customTime, setCustomTime] = useState(''); // Guarda el tiempo escrito por el usuario.

    function handlePress(index: number): void {
        // Segun el boton presionado, se elige cuantos minutos debe durar el contador.
        const newTime = (index === 0 ? 25 : (index === 1 ? 5 : 15));

        // Marcamos cual boton esta seleccionado para cambiar el borde y el color de fondo.
        setCurrentTime(index);

        // Convertimos los minutos a segundos porque el reloj trabaja con segundos.
        setTime(newTime * 60);

        // Al presionar cualquier boton, el reloj empieza la cuenta regresiva.
        setIsActive(true);
    }

    function handleCustomTime(): void {
        // Convertimos el texto escrito por el usuario a numero.
        const minutes = Number(customTime);

        // Si el usuario no escribe un numero valido, no iniciamos el reloj.
        if (minutes <= 0) {
            return;
        }

        // Ponemos el tiempo personalizado en el reloj, tambien convertido a segundos.
        setTime(minutes * 60);

        // Usamos -1 para indicar que no esta seleccionado Pomodoro, descanso corto ni descanso largo.
        setCurrentTime(-1);

        // Iniciamos la cuenta regresiva con el tiempo personalizado.
        setIsActive(true);
    }

    return (
        <View style={styles.container}>
            <View style={styles.botones}>
                {opciones.map((item, index) => (
                    <TouchableOpacity key={index}
                        onPress={() => handlePress(index)}
                        style={[styles.itemStyle, currentTime !== index && { borderColor: "transparent" }]}>
                        <Text style={{ fontWeight: 'bold' }}> {item} </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.customContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Minutos"
                    keyboardType="numeric"
                    value={customTime}
                    onChangeText={setCustomTime}
                />

                <TouchableOpacity onPress={handleCustomTime} style={styles.customButton}>
                    <Text style={styles.customButtonText}>Iniciar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 10,
        marginVertical: 20,
    },
    botones: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    itemStyle: {
        borderWidth: 3,
        padding: 5,
        flex: 1,
        marginHorizontal: 5,
        borderRadius: 15,
        alignItems: 'center',
        borderColor: 'white',
    },
    customContainer: {
        flexDirection: 'row',
        marginTop: 15,
        width: '100%',
        paddingHorizontal: 15,
    },
    input: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        marginRight: 10,
        fontWeight: 'bold',
    },
    customButton: {
        backgroundColor: '#1a17c2',
        borderRadius: 10,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    customButtonText: {
        color: 'white',
        fontWeight: 'bold',
    }
})
