import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native';
import tw from 'twrnc';
import Button from '../components/Button';

export default function CalcAbdomen() {

    const [sex, setSex] = useState("");
    const [abd, setAbd] = useState(0);
    const [result, setResult] = useState("Normal");

    const calcAbd = () => {

        const abdResult = ''

        if (sex === 'Masc') {
            console.log('Entrou no if masc')
            console.log(abd)
            switch (abd) {
                case 90:
                    abdResult = 'Normal';
                    break;
                case (abd <= 94):
                    abdResult = 'Médio';
                    break;
                case (abd <= 102):
                    abdResult = 'Alto';
                    break;
                case (abd > 102):
                    abdResult = 'Altíssimo';
                    break;

            }
        }

        if (sex === 'Fem') {
            switch (abd) {
                case (abd <= 80):
                    abdResult = 'Normal';
                    break;
                case (abd <= 84):
                    abdResult = 'Médio';
                    break;
                case (abd <= 88):
                    abdResult = 'Alto';
                    break;
                case (abd > 88):
                    abdResult = 'Altíssimo';
                    break;
            }
        }

        setResult(abdResult);
    }

    return (
        <View style={tw`w-full h-full items-center justify-center`}>
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
            <Text style={tw`mt-7`}>Situação de risco: {result}</Text>
        </View>
    )
}