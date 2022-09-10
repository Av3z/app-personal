import React, { useLayoutEffect } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import tw from 'twrnc';
import FabButton from '../components/FabButton';
import MenuButton from '../components/MenuButton';

export default function HomeScreen({ navigation }) {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <MenuButton />
            )
        })
    })

    return (
        <View style={tw`bg-slate-200 w-full h-full items-center justify-center`}>
            <TouchableOpacity style={tw`bg-white p-3 w-60 rounded-md shadow-md items-center`} onPress={() => navigation.navigate('IMC')}>
                <Text style={tw`font-bold text-slate-500`}>IMC Calculadora</Text>
            </TouchableOpacity>
            <FabButton text={'+'} />
        </View>
    )
}