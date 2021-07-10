import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
//import { Colors } from 'react-native/Libraries/NewAppScreen';

import Colors from '../config/Colors';
function Button({title, onPress, color = "primary"}) {
    return (
        <TouchableOpacity style={[styles.button], {backgroundColor:Colors[color]}} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
        marginVertical: 10,
        alignContent:'center'
    },
    text:{
        color:"#fff",
        fontSize: 18,
        textTransform:'uppercase',
        fontWeight: "bold",
    }
});
export default Button;