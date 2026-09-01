import { useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Informe() {
    const [modalEstaVisible, establecerModalEstaVisible] = useState(false); // Guarda si la modal esta abierta o cerrada.

    return (
        <View style={estilos.contenedor}>
            <TouchableOpacity
                style={estilos.botonAbrir}
                onPress={() => establecerModalEstaVisible(true)}
            >
                <Text style={estilos.textoBotonAbrir}>Informe</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalEstaVisible}
                onRequestClose={() => establecerModalEstaVisible(false)}
            >
                <View style={estilos.fondoModal}>
                    <View style={estilos.contenidoModal}>
                        <Text style={estilos.tituloModal}>Resumen de la actividad</Text>

                        <TouchableOpacity
                            style={estilos.botonCerrar}
                            onPress={() => establecerModalEstaVisible(false)}
                        >
                            <Text style={estilos.textoBotonCerrar}>Cerrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const estilos = StyleSheet.create({
    contenedor: {
        marginTop: 10,
    },
    botonAbrir: {
        backgroundColor: '#1a17c2',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    textoBotonAbrir: {
        color: 'white',
        fontWeight: 'bold',
    },
    fondoModal: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contenidoModal: {
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 25,
        width: '80%',
        alignItems: 'center',
    },
    tituloModal: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    botonCerrar: {
        backgroundColor: '#1a17c2',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    textoBotonCerrar: {
        color: 'white',
        fontWeight: 'bold',
    },
});
