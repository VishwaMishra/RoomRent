import React from 'react';

import Colors from '../config/Colors';
import { View,StyleSheet, Image } from 'react-native';

function Card({title, subTitle,image}) {
    return (
        <View style={styles.card}>
            <Image style={styles.Image} source={require(image)}/>
            <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subtitle}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius:15,
        backgroundColor: Colors.white,
        marginBottom: 20,
        overflow:"hidden",
    },
    detailsContainer :{
        padding: 20,
    },
    image :{
        width: "100%",
        height:200,
    },
    subTitle: {
        color: Colors.secondary,
        fontWeight:"bold",
    },
    title:{
        marginBottom: 7,
    }
})

export default Card;