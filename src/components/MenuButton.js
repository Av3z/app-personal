import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { Pressable } from 'react-native';
export default function MenuButton({ style }) {
    return (
        <>
            <Pressable>
                <Entypo style={style} name="menu" size={24} color="black" />
            </Pressable>
        </>
    )
}