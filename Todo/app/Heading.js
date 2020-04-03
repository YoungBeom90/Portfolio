import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Heading = () => (
    <View style={styles.header}>
        <Text style={styles.headerText}>
            todos
        </Text>
    </View>
)
const styles = StyleSheet.create ({
    header: {
        marginTop: 50,
        marginBottom: 20,
    },
    headerText: {
        color: 'rgba(175, 47, 47, 0.7)',
        textAlign: 'center',
        fontSize: 72,
        fontWeight: '100'
    }
})
export default Heading;