import React from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import styles from './AppText/styles';
function AppText({Children, style}) {
    return (
        <Text Style={[styles.text, style]}>{Children}</Text>
        
    );
}

export default AppText;