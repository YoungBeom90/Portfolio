import React from 'react';
import  { View, Text, StyleSheet } from 'reat-native';

const Todo = ({ todo }) => (
    <View style={styles.todoContainer}>
        <Text style={styles.todoText}>
            {todo.title}
        </Text>
    </View>
)

const styles = StyleSheet.create({
    todoContainer: {
        marginLeft: 20,
        marginRight: 20,
        backgroudColor: '#ffffff',
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: '#ededed',
        paddingLeft: 14,
        paddingTop: 7,
        paddingBottom: 7,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowOffset: { width: 2, height: 2 },
        flexDirection: 'row',
        alignItems: 'center',
    },
    todoText: {
        fontSize: 17
    },
})
export default Todo;