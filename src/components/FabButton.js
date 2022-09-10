import React from 'react'
import { View, Text } from 'react-native'
import tw from 'twrnc'

export default function FabButton({ text }) {
    return (
        <View style={tw`absolute bottom-8 right-8 bg-white shadow-md rounded-full w-15 h-15 items-center justify-center`}>
            <Text style={tw`text-8`}> {text} </Text>
        </View>
    )
}