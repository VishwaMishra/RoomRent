import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
//import styles from './../components/AppText/styles';
//import home2 from '../assets/home2.jpeg';
import AppText from '../components/AppText';
import Colors from '../config/Colors';
import ListItem from '../components/ListItem';

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style= {styles.image} source={require('../assets/home2.jpg')}/>
            <View style={styles.detailsContainer}>
            <AppText style={styles.title}>Home on Rent</AppText>
            <AppText style={styles.price}>Rs. 1000-2000</AppText>
            <View style={styles.userContainer}>
                <ListItem 
                    image={require("../assets/User-Icon.jpg")}
                    title="Abhishek"
                    subTitle="5 Listing"
                />

            </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer:{
        padding:20,
    },
    image: {
        width: '100%',
        height: 300,
    },
    title:{
        fontSize: 24,
        fontWeight:"500",
    },
    price:{
        color:Colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10,
    },
    userContainer:{
        marginVertical: 40,
    }

});
export default ListingDetailsScreen;

