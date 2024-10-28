import React from 'react';
import { Link } from 'expo-router';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';

export default function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Home</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        gap: 30,
    },
    header: {
        width: '100%',
        padding: 20,
        backgroundColor: 'black', 
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
    },
});