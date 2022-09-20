import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native';
import tw from 'twrnc';
import Button from '../components/Button';

export default function CalcIAC() {

    const [hip, setHip] = useState();
    const [height, setHeight] = useState();
    const [iac, setIac] = useState(0);

    const calc = () => {
        setIac((hip / Math.pow(height, 1.5)) - 18)
    }

    return (
        <View style={tw`h-full w-full items-center justify-center`}>

            <View style={tw`flex flex-row`}>
                <Text style={tw`text-slate-500 font-bold text-7 mb-10`}> Calculadora</Text>
                <Text style={tw`italic font-bold text-7 text-green-500`}> IAC</Text>
            </View>

            <TextInput
                style={tw`bg-white rounded-md shadow-md p-3 w-75 font-bold text-slate-400 mt-3`}
                placeholder='Medida do quadril'
                value={hip}
                onChangeText={(text) => setHip(text)} />

            <TextInput
                style={tw`bg-white rounded-md shadow-md p-3 w-75 font-bold text-slate-400 mt-3 mb-5`}
                placeholder='Altura'
                value={height}
                onChangeText={(text) => setHeight(text)} />

            <Button onPress={() => calc()} color={'bg-green-500'} textColor={'text-white'} width={'w-50'} name={"Calcular"} />

            <Text style={tw`mt-7`}>IAC: {iac.toFixed(2)} </Text>
        </View>
    )
}