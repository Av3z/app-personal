import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import tw from 'twrnc';

export default function Button({ onPress, name }) {
    return (
        <TouchableOpacity style={tw`bg-white p-3 w-60 rounded-md shadow-md items-center`} onPress={onPress}>
            <Text style={tw`font-bold text-slate-500`}>{name}</Text>
        </TouchableOpacity>
    )
}