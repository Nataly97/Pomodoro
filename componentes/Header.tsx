import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const opciones = ["Pomodoro", "Descanso Corto", "Descanso Largo"];

interface PropiedadesHeader {
    establecerTiempo: React.Dispatch<React.SetStateAction<number>>;
    tiempoActual: number;
    establecerTiempoActual: React.Dispatch<React.SetStateAction<number>>;
    establecerEstaActivo: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ establecerTiempo, tiempoActual, establecerTiempoActual, establecerEstaActivo }: PropiedadesHeader) {

    // Guarda el tiempo escrito por el usuario.
    const [tiempoPersonalizado, establecerTiempoPersonalizado] = useState(''); 

    function manejarPresion(indice: number): void {
        // Segun el boton presionado, se elige cuantos minutos debe durar el contador.
        const nuevoTiempo = (indice === 0 ? 25 : (indice === 1 ? 5 : 15));

        // Marca cual boton esta seleccionado para cambiar el borde y el color de fondo.
        establecerTiempoActual(indice);

        // Convierte los minutos a segundos porque el reloj trabaja con segundos.
        establecerTiempo(nuevoTiempo * 60);

        // Al presionar cualquier boton, el reloj empieza la cuenta regresiva.
        establecerEstaActivo(true);
    }

    function manejarTiempoPersonalizado(): void {
        // Convierte el texto escrito por el usuario a numero.
        const minutos = Number(tiempoPersonalizado);

        // Si el usuario no escribe un numero valido, no inicia el reloj.
        if (minutos <= 0) {
            return;
        }

        // Pone el tiempo personalizado en el reloj.
        establecerTiempo(minutos * 60);

        // Usa -1 para indicar que no esta seleccionado Pomodoro, descanso corto ni descanso largo.
        //Las opciones del arreglo 
        establecerTiempoActual(-1);

        // Iniciamos la cuenta regresiva con el tiempo personalizado.
        establecerEstaActivo(true);
    }

    return (
        // Contenedor principal del Header
        <View style={estilos.contenedor}>
            {/* Contenedor de los botones Pomodoro, Descanso Corto y Descanso Largo */}
            <View style={estilos.botones}>
                {/* Mapea las opciones y crea un boton para cada una. */}
                {opciones.map((opcion, indice) => (
                    // Cada boton tiene un estilo diferente si esta seleccionado o no.
                    <TouchableOpacity key={indice}
                        onPress={() => manejarPresion(indice)}
                        style={[estilos.estiloOpcion, tiempoActual !== indice && { borderColor: "transparent" }]}>
                        <Text style={{ fontWeight: 'bold' }}> {opcion} </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Contenedor del input y boton para iniciar el tiempo personalizado */}
            <View style={estilos.contenedorPersonalizado}>
                {/* Input para que el usuario escriba el tiempo personalizado en minutos. */}
                <TextInput
                    style={estilos.entrada}
                    placeholder="Minutos"
                    keyboardType="numeric"
                    value={tiempoPersonalizado}
                    onChangeText={establecerTiempoPersonalizado}
                />

                {/* Boton para iniciar el tiempo personalizado. */}
                <TouchableOpacity onPress={manejarTiempoPersonalizado} style={estilos.botonPersonalizado}>
                    <Text style={estilos.textoBotonPersonalizado}>Iniciar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({
    contenedor: {
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
    estiloOpcion: {
        borderWidth: 3,
        padding: 5,
        flex: 1,
        marginHorizontal: 5,
        borderRadius: 15,
        alignItems: 'center',
        borderColor: 'white',
    },
    contenedorPersonalizado: {
        flexDirection: 'row',
        marginTop: 15,
        width: '100%',
        paddingHorizontal: 15,
    },
    entrada: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        marginRight: 10,
        fontWeight: 'bold',
    },
    botonPersonalizado: {
        backgroundColor: '#1a17c2',
        borderRadius: 10,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoBotonPersonalizado: {
        color: 'white',
        fontWeight: 'bold',
    }
})
