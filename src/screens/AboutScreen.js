import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { View, Text, StyleSheet } from 'react-native'

export const AboutScreen = ({ navigation }) => {
    return (
        <View style={ styles.center }>
            <Text>AboutScreen</Text>
        </View>
    )
}

AboutScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: 'О приложении',
    headerLeft: (
        <HeaderButtons HeaderButtonComponent={ AppHeaderIcon }>
            <Item title='menu' iconName='md-menu' onPress={ () => navigation.toggleDrawer() }></Item>
        </HeaderButtons>
    )
})

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})