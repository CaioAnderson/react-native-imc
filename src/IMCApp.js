import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import IMCCalc from './IMCCalc';

export default function IMCApp() {

    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);

    const [calcular, setCalcular] = useState(false);

    const [disabledButton, setDisabledButton] = useState(false);
    const [disabledTextInput, setDisabledTextInput] = useState(true);

    function calcularIMC() {
        setCalcular(true);
        setDisabledButton(true);
        setDisabledTextInput(false);
    }

    function calcularIMCAgain(){
        setCalcular(false);
        setDisabledButton(false);
        setDisabledTextInput(true);
        setPeso('');
        setAltura('');

    }

    return (
        <View style={styles.container}>
            <View style={styles.areaForm}>
                <View style={styles.linhaForm}>
                    <Text style={styles.textInput}>Peso :</Text>
                    <TextInput style={styles.input}
                        placeholder="Digite seu peso"
                        value={peso}
                        onChangeText={setPeso}
                        editable={disabledTextInput} />
                </View>
                <View style={styles.linhaForm}>
                    <Text style={styles.textInput}>Altura :</Text>
                    <TextInput style={styles.input}
                        placeholder="Digite sua altura"
                        value={altura}
                        onChangeText={setAltura}
                        editable={disabledTextInput} />
                </View>

                {!disabledButton ?
                    <View>
                        <TouchableOpacity style={styles.button} onPress={calcularIMC} disabled={disabledButton} >
                            <Text style={styles.textButton}>Calcular!</Text>
                        </TouchableOpacity>
                    </View> :
                    <View>
                    <TouchableOpacity style={styles.buttonDisabled} onPress={calcularIMCAgain}>
                    <Text style={styles.textButton}>Calcular novamente!</Text>
                </TouchableOpacity>
                 </View>
            
                 }

            </View>

            {calcular ?
                <IMCCalc valuePeso={peso} valueAltura={altura} /> :
                <View />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
    },
    textIMC: {
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    areaForm: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    linhaForm: {
        marginVertical: 7
    },
    textInput: {
        marginHorizontal: 5,
        fontSize: 16
    },
    input: {
        height: 30,
        width: 200,
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 100,
        borderColor: '#000',
        paddingHorizontal: 14,

    },

    button: {
        marginTop: 30,
        height: 30,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        height: 56,
        backgroundColor: '#2196f3'
    },
    buttonDisabled: {
        marginTop: 30,
        height: 30,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        height: 56,
        backgroundColor: '#808080'
    },
    textButton: {
        color: '#fff'
    },
    textResultado: {
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute'
    }
});