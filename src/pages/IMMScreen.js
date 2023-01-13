import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import tw from 'twrnc'

export default function IMMSCreen() {

    const [muscleMass, setMuscleMass] = useState();
    const [weight, setWeight] = useState();
    const [imm, setImm] = useState(0);

    const calcImm = () => {
        setImm((muscleMass / weight) * 100);

    }

    return (
        <View style={tw`w-full h-full items-center justify-center bg-slate-100`}>
            <View style={tw`flex flex-row`}>
                <Text style={tw`text-slate-500 font-bold text-7 mb-10`}> Calculadora</Text>
                <Text style={tw`italic font-bold text-7 text-green-500`}> IMM</Text>
            </View>
            <TextInput
                style={tw`bg-white rounded-md shadow-md p-3 w-75 font-bold text-slate-400 mt-3`}
                placeholder='Massa Muscular (KG)'
                keyboardType="numeric"
                value={muscleMass}
                onChangeText={(text) => setMuscleMass(text)}
            />

            <TextInput
                style={tw`bg-white rounded-md shadow-md p-3 w-75 font-bold text-slate-400 mt-3`}
                placeholder='Peso'
                keyboardType="numeric"
                vvalue={weight}
                onChangeText={(text) => setWeight(text)}
            />

            <TouchableOpacity style={tw`bg-green-400 p-3 rounded-md shadow-md mt-5 w-40 items-center`}
                onPress={() => calcImm()}
            >
                <Text style={tw`text-white font-bold`}>Calcular</Text>
            </TouchableOpacity>
            <Text style={tw`mt-5 font-bold text-slate-500`}>IMM: {imm.toFixed(2) + "%"}</Text>
        </View>
    )
}