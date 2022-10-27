import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import tw from 'twrnc';
import Button from "../components/Button";

export default function WeightBoneScreen() {

    const [height, setHeight] = useState();
    const [fish, setFish] = useState()
    const [knee, setKnee] = useState()
    const [result, setResult] = useState(0)


    const calcWeightBone = () => {
        setResult(3.02 * (400 * fish * knee * (height * height)))
        console.log(result)
    }

    return (
        <View style={tw`w-full h-full bg-slate-100 items-center justify-center`}>
            <View style={tw`flex flex-row`}>
                <Text style={tw`text-slate-500 font-bold text-6 mb-10`}>Calculadora</Text>
                <Text style={tw`italic font-bold text-6 text-green-500`}> Peso Ósseo</Text>
            </View>
            <TextInput
                style={tw`bg-white rounded-md shadow-md p-2 w-60 mt-3 font-bold text-slate-400`}
                placeholder="Altura"
                keyboardType="numeric"
                value={height}
                onChangeText={(text) => setHeight(text / 100)} />

            <TextInput
                style={tw`bg-white rounded-md shadow-md p-2 w-60 mt-3 font-bold text-slate-400`}
                placeholder="Diâmetro do Punho"
                keyboardType="numeric"
                value={fish}
                onChangeText={(text) => setFish(text / 100)} />

            <TextInput
                style={tw`bg-white rounded-md shadow-md p-2 w-60 mt-3 mb-5 font-bold text-slate-400`}
                placeholder="Diâmetro do Joelho"
                keyboardType="numeric"
                value={knee}
                onChangeText={(text) => setKnee(text / 100)} />

            <Button onPress={() => calcWeightBone()} color={'bg-green-500'} textColor={'text-white'} width={'w-50'} name={"Calcular"} />

            <Text style={tw`mt-5 font-bold text-slate-500`}>Peso Ósseo: {result}</Text>
        </View>
    )
}