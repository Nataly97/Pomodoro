import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const opciones = ["Pomodoro", "Descanso Corto", "Descanso Largo"];

interface HeaderProps {
    setTime: React.Dispatch<React.SetStateAction<number>>;
    currentTime: number;
    setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
}

export default function Header({ setTime, currentTime, setCurrentTime }: HeaderProps) {

    // const [currentOption, setCurrentOption] = useState('');

    return (
        <View>

            <View>

                {opciones.map((item, index) => (
                    <TouchableOpacity key={index}
                    onPress={() => handlePress(index)}
                    style={[style.itemStyle, currentTime !== index && {borderColor: 'transparent'}]}>
                        <Text style={{fontWeight: 'bold'}}> {item} </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );  
}

const style = StyleSheet.create({})