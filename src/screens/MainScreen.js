import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { DATA } from '../data'
import { Post } from '../components/Post'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { PostList } from '../components/PostList'

export const MainScreen = ({ navigation }) => {
    const openPostHandler = post => {
        navigation.navigate('Post', {
            postId: post.id,
            date: post.date,
            booked: post.booked
        })
    }
    return <PostList data={ DATA } onOpen={ openPostHandler } />
}

MainScreen.navigationOptions = {
    headerTitle: 'Мой блог',
    headerRight: ( 
        <HeaderButtons HeaderButtonComponent={ AppHeaderIcon }>
            <Item title='Take photo' iconName='ios-camera' onPress={ () => console.log('Press photo')}></Item>
        </HeaderButtons>
    ),
    headerLeft: (
        <HeaderButtons HeaderButtonComponent={ AppHeaderIcon }>
            <Item title='menu' iconName='md-menu' onPress={ () => console.log('Press menu')}></Item>
        </HeaderButtons>
    )
}
