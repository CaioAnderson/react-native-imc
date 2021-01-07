import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

export default function IMCMsg({ resultadoIMC }) {

    const [resultadoMsg, setResultadoMsg] = useState('Teste');
    const [alert, setAlert] = useState(true);

    useEffect(() => {
        if (resultadoIMC < 17) {
            setAlert(true);
            setResultadoMsg('Muito abaixo do peso');
        } else if (resultadoIMC >= 17 && resultadoIMC <= 18.49) {
            setAlert(true);
            setResultadoMsg('Abaixo do peso');
        } else if (resultadoIMC > 18.49 && resultadoIMC <= 24.99) {
            setAlert(false);
            setResultadoMsg('Peso normal');
        } else if (resultadoIMC > 24.99 && resultadoIMC <= 29.99) {
            setAlert(true);
            setResultadoMsg('Acima do peso');
        } else if (resultadoIMC > 29.99 && resultadoIMC <= 34.99) {
            setAlert(true);
            setResultadoMsg('Obesidade I');
        } else if (resultadoIMC > 34.99 && resultadoIMC <= 39.99) {
            setAlert(true);
            setResultadoMsg('Obesidade II (severa)');
        } else {
            setAlert(true);
            setResultadoMsg('Obesidade III (mórbida)');
        }

    }, [resultadoIMC]);

    return (
        <View>
            {!alert ?
                <Text
                    style={{ alignSelf: 'center', color: 'blue', fontWeight: 'bold', fontSize: 18 }}>
                    {resultadoMsg}
                </Text> :
                <Text style={{ alignSelf: 'center', color: 'red', fontWeight: 'bold', fontSize: 18 }}>{resultadoMsg}</Text>
            }

        </View>

    );
};