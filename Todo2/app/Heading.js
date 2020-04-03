import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Heading = () => (
    <View style={styles.header}>
        <Text style={styles.headerText}>
            My barket list
        </Text>
    </View>
)
const styles= StyleSheet.create ({
    header: {
        marginTop: 30,
    },
    headerText: {
        textAlign: 'center',
        fontSize: 50,
        color: 'rgba(175,47,47,0.5)',
        fontWeight: '100',
        marginBottom: 20,
    },
})
export default Heading;
