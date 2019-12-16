import React, { useState } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { View, Text, StyleSheet, Image, TextInput, Button, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { THEME } from '../theme'
import { useDispatch } from 'react-redux'
import { addPost } from '../store/actions/post'

export const CreateScreen = ({ navigation }) => {
    const dispatch = useDispatch()

    const [text, setText] = useState('')
    
    const img = 'https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg'

    const createPostHandler = () => {
        const post = {
            date: new Date().toJSON(),
            text: text,
            img: img,
            booked: false
        }
        dispatch(addPost(post))
        navigation.navigate('Main')
    }

    return (
        <ScrollView>
            <TouchableWithoutFeedback onPress={ () => {
                Keyboard.dismiss()
            }}>
                <View style={ styles.wrapper }>
                    <Text style={ styles.title }>Создай новый пост</Text>
                    <TextInput 
                        style={ styles.textarea } 
                        placeholder='Ввдите текст поста' 
                        value={ text } 
                        onChangeText={ setText }
                        multiline
                    />
                    <Image 
                        source={{ 
                            uri: img
                        }}
                        style={ styles.image }
                    />
                    <Button 
                        title='Создать пост'
                        color={ THEME.MAIN_COLOR }
                        onPress={ createPostHandler }
                    />
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    )
}

CreateScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: 'Создать пост',
    headerLeft: (
        <HeaderButtons HeaderButtonComponent={ AppHeaderIcon }>
            <Item title='menu' iconName='md-menu' onPress={ () => navigation.toggleDrawer() }></Item>
        </HeaderButtons>
    )
})

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'open-sans-regular'
    },
    textarea: {

    },
    image: {
        width: '100%',
        height: 200,
        marginVertical: 10
    },
})