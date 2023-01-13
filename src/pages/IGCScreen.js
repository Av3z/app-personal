import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import tw from 'twrnc'

export default function IGCScreen() {

    const [fat, setFat] = useState();
    const [weight, setWeight] = useState();
    const [igc, setIgc] = useState(0);

    const calcIGC = () => {
        setIgc((fat / weight) * 100);
    }



    return (
        <View style={tw`h-full w-full justify-center items-center`}>
            <View style={tw`flex flex-row`}>
                <Text style={tw`text-slate-500 font-bold text-7 mb-10`}> Calculadora</Text>
                <Text style={tw`italic font-bold text-7 text-green-500`}> IGC</Text>
            </View>
            <TextInput
                style={tw`bg-white rounded-md shadow-md p-3 w-75 font-bold text-slate-400 mt-3`}
                placeholder='Gordura Corporal (KG)'
                value={fat}
                onChangeText={(text) => setFat(text)} />
            <TextInput
                style={tw`bg-white rounded-md shadow-md p-3 w-75 font-bold text-slate-400 mt-3 mb-5`}
                placeholder='Peso'
                value={weight}
                onChangeText={(text) => setWeight(text)} />

            <TouchableOpacity style={tw`bg-green-400 p-3 rounded-md shadow-md mt-5 w-40 items-center`}
                onPress={() => calcIGC()}
            >
                <Text style={tw`text-white font-bold`}>Calcular</Text>
            </TouchableOpacity>

            <Text style={tw`mt-7 font-bold text-slate-500`}>IGC: {igc.toFixed(2) + "%"} </Text>
        </View>
    )
}