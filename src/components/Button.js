import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import tw from 'twrnc';

export default function Button({ onPress, name, color, width, textColor }) {
    return (
        <TouchableOpacity style={tw`${color} p-3 ${width} rounded-md shadow-md items-center`} onPress={onPress}>
            <Text style={tw`font-bold ${textColor}`}>{name}</Text>
        </TouchableOpacity>
    )
}