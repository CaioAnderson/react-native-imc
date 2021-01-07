import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

import IMCMsg from './IMCMsg';

export default function IMCCalc({ valuePeso, valueAltura }) {

    const resultado = valuePeso / (valueAltura * valueAltura);

    return (
        <View style={styles.container}>
            <View style={styles.areaResultado}>
            <Text style={styles.textIMC}>Seu IMC é : { resultado } </Text>
            <IMCMsg resultadoIMC={resultado} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
    },
    textIMC: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 18
    },
});