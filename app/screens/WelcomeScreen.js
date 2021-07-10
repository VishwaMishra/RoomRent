import React from 'react';

import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';

import Button from '../components/Button';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        blurRadius={10}
        style={styles.background}
        source={require("../assets/background.jpg")}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/logo.PNG")}/>
                <Text style={styles.tagLine}>Rent Your New or Old Home</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Login"></Button>
                <Button title="Register" color="secondary"></Button>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    
    buttonContainer:{
        width: "100%",
        padding:20,
    },
    logo:{
        width: 115,
        height:100,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
        
    },
    tagLine:{
        fontSize: 20,
        fontWeight:"500",
        paddingVertical: 20,
    }
})
export default WelcomeScreen;
