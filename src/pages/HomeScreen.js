import React, { useLayoutEffect } from 'react'
import { View } from 'react-native'
import tw from 'twrnc';
import Button from '../components/Button';
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
            <Button name={'Calculadora IMC'} onPress={() => navigation.navigate('IMC')} />
            <FabButton text={'+'} />
        </View>
    )
}