import React, { useState, useRef } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    TextInput, 
    Button, 
    ScrollView, 
    TouchableWithoutFeedback,
    Keyboard 
} from 'react-native'
import { THEME } from '../theme'
import { useDispatch } from 'react-redux'
import { addPost } from '../store/actions/post'
import { PhotoPicker } from '../components/PhotoPicker'

export const CreateScreen = ({ navigation }) => {
    const dispatch = useDispatch()

    const [text, setText] = useState('')
    
    const imgRef = useRef()

    const createPostHandler = () => {
        const post = {
            date: new Date().toJSON(),
            text: text,
            img: imgRef.current,
            booked: false
        }
        dispatch(addPost(post))
        navigation.navigate('Main')
    }

    const photoPickHandler = uri => {
        imgRef.current = uri
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
                    <PhotoPicker onPick={ photoPickHandler } style={ styles.image } />
                    <Button 
                        title='Создать пост'
                        color={ THEME.MAIN_COLOR }
                        onPress={ createPostHandler } 
                        disabled={ !text }
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
        marginVertical: 10
    },
    image: {
        width: '100%',
        height: 200, 
        marginVertical: 10
    },
})