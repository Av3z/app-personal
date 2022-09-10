import React from 'react'
import { Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
export default function BackButton({ style, onPress }) {
    return (
        <>
            <Pressable onPress={onPress}>
                <AntDesign style={style} name="back" size={24} color="black" />
            </Pressable>
        </>
    )
}