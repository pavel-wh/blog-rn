import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const BookmarkedScreen = ({}) => {
    return (
        <View style={ styles.center }>
            <Text>BookmarkedScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignITems: 'center'
    }
})