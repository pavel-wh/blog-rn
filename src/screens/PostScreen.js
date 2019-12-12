import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { THEME } from '../theme'

export const PostScreen = ({ navigation }) => {
    const postId = navigation.getParam('postId')
    return (
        <View style={ styles.center }>
            <Text>PostScreen { postId }</Text>
        </View>
    )
}

PostScreen.navigationOptions = ({ navigation }) => {
    const date = navigation.getParam('date')
    return {
        headerTitle: `Пост от ${ new Date(date).toLocaleDateString() }`,
        headerStyle: {
            backgroundColor: 'firebrick',
            backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : 'white'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : THEME.MAIN_COLOR
    }
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}) 