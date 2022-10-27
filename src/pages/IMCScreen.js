import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import tw from 'twrnc'

export default function IMCSCreen() {

    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [result, setResult] = useState('Normal');
    const [imc, setImc] = useState(0);

    const calcImc = () => {
        setImc(weight / (height * height));

        let imcResult = '';

        if (imc < 18.5) imcResult = 'Abaixo do Peso';
        else if (imc >= 18.5 && imc <= 24.9) imcResult = 'Normal';
        else if (imc > 24.9 && imc <= 29.9) imcResult = 'Excesso de Peso';
        else if (imc > 29.9 && imc <= 34.9) imcResult = 'Obesidade classe I';
        else if (imc > 34.9 && imc <= 39.9) imcResult = 'Obesidade classe II';
        else if (imc >= 40) imcResult = 'Obesidade classe III';
        else console.log('Erro dados inválidos!')

        setResult(imcResult);
    }

    return (
        <View style={tw`w-full h-full items-center justify-center bg-slate-100`}>
            <View style={tw`flex flex-row`}>
                <Text style={tw`text-slate-500 font-bold text-7 mb-10`}> Calculadora</Text>
                <Text style={tw`italic font-bold text-7 text-green-500`}> IMC</Text>
            </View>
            <TextInput
                style={tw`bg-white rounded-md shadow-md p-3 w-75 font-bold text-slate-400 mt-3`}
                placeholder='Peso'
                keyboardType="numeric"
                value={weight}
                onChangeText={(text) => setWeight(text)}
            />

            <TextInput
                style={tw`bg-white rounded-md shadow-md p-3 w-75 font-bold text-slate-400 mt-3`}
                placeholder='Altura'
                keyboardType="numeric"
                value={height}
                onChangeText={(text) => setHeight(text)}
            />

            <TouchableOpacity style={tw`bg-green-400 p-3 rounded-md shadow-md mt-5 w-40 items-center`}
                onPress={() => calcImc()}
            >
                <Text style={tw`text-white font-bold`}>Calcular</Text>
            </TouchableOpacity>
            <Text style={tw`mt-5 font-bold text-slate-500`}>IMC: {imc.toFixed(2)}</Text>
            <Text style={tw`mt-3 font-bold text-slate-500`}>Situação: {result}</Text>
        </View>
    )
}