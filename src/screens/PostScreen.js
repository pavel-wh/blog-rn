import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { THEME } from '../theme'

export const PostScreen = ({}) => {
    return (
        <View style={ styles.center }>
            <Text>PostScreen</Text>
        </View>
    )
}

PostScreen.navigationOptions = {
    headerTitle: 'Пост номер 42',
    headerStyle: {
        backgroundColor: 'firebrick',
        backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : 'white'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : THEME.MAIN_COLOR
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}) 