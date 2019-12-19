import React, { useEffect, useCallback } from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    Button, 
    ScrollView, 
    Alert 
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { THEME } from '../theme'
import { toggleBookmarked, removePost } from '../store/actions/post'

export const PostScreen = ({ navigation }) => {
    const dispatch = useDispatch()

    const postId = navigation.getParam('postId')

    const post = useSelector(state => state.post.allPosts.find(p => p.id === postId))

    const booked = useSelector(state => state.post.bookmarkedPosts.some(post => post.id === postId))

    useEffect(() => {
        navigation.setParams({
            booked
        })
    }, [booked])
    
    const toggleHandler = useCallback(() => {
        dispatch(toggleBookmarked(post))
    }, [dispatch, post])

    useEffect(() => {
        navigation.setParams({ toggleHandler })
    }, [toggleHandler])

    const removeHandler = () => {
        Alert.alert(
            'Удаление поста',
            'Вы точно хотите удалить пост?',
            [
                {
                    text: 'Отменить',
                    style: 'cancel',
                },
                {
                    text: 'Удалить', 
                    style: 'destructive',
                    onPress: () => {
                        navigation.navigate('Main')
                        dispatch(removePost(postId))
                    }
                }
            ],
            {
                cancelable: false
            },
        )
    }

    if(!post) {
        return null
    }
    
    return (
        <ScrollView>
            <Image source={ { uri: post.img } } style={ styles.image } />
            <View style={ styles.textWrap }>
                <Text style={ styles.title }>{ post.text }</Text>
            </View>
            <Button title='Удалить' color={ THEME.DANGER_COLOR } onPress={ removeHandler } />
        </ScrollView>
    ) 
}

PostScreen.navigationOptions = ({ navigation }) => {
    const date = navigation.getParam('date')
    const booked = navigation.getParam('booked')
    const toggleHandler = navigation.getParam('toggleHandler')
    const iconName = booked ? 'ios-star' : 'ios-star-outline'
    return {
        headerTitle: `Пост от ${ new Date(date).toLocaleDateString() }`,
        headerStyle: {
            backgroundColor: 'firebrick',
            backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : 'white'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : THEME.MAIN_COLOR,
        headerRight: ( 
            <HeaderButtons HeaderButtonComponent={ AppHeaderIcon }>
                <Item 
                    title='Take photo' 
                    iconName={ iconName } 
                    onPress={ toggleHandler }
                ></Item>
            </HeaderButtons>
        ),
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    textWrap: {
        padding: 10
    },
    title: {
        fontFamily: 'open-sans-regular'
    }
}) 