import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native';
import tw from 'twrnc';
import Button from '../components/Button';

export default function CalcAbdomen() {

    const [sex, setSex] = useState();
    const [abd, setAbd] = useState();
    const [result, setResult] = useState("Normal");

    const calcAbd = () => {

        let abdResult = ''

        if (sex == 'Masc') {

            if (abd < 90) abdResult = 'Normal';
            else if (abd <= 94) abdResult = 'Médio';
            else if (abd <= 102) abdResult = 'Alto';
            else if (abd > 102) abdResult = 'Altíssimo';
            else console.log('Erro não consegui identificar o valor')
        }

        else if (sex == 'Fem') {

            if (abd < 80) abdResult = 'Normal';
            else if (abd <= 84) abdResult = 'Médio';
            else if (abd <= 88) abdResult = 'Alto';
            else if (abd > 88) abdResult = 'Altíssimo';
            else console.log('Erro não consegui identificar o valor')
        }

        setResult(abdResult);
    }

    return (
        <View style={tw`w-full h-full items-center justify-center`}>
            <Text style={tw`text-slate-500 font-bold text-7 mb-2`}>Calculadora</Text>
            <Text style={tw`italic font-bold text-7 text-green-500 mb-10`}>Perimetro Abdominal</Text>
            <TextInput
                style={tw`bg-white rounded-md shadow-md p-3 w-75 font-bold text-slate-400 mt-3`}
                placeholder='Medida do Abdômen'
                value={abd}
                onChangeText={(text) => setAbd(text)} />

            <TextInput
                style={tw`bg-white rounded-md shadow-md p-3 w-75 font-bold text-slate-400 mt-3 mb-5`}
                placeholder='Masc / Fem'
                value={sex}
                onChangeText={(text) => setSex(text)} />

            <Button onPress={() => calcAbd()} color={'bg-green-500'} textColor={'text-white'} width={'w-50'} name={"Calcular"} />
            <Text style={tw`mt-7 font-bold text-slate-500`}>Situação de risco: {result}</Text>
        </View>
    )
}