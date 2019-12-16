import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { DATA } from '../data'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { PostList } from '../components/PostList'

export const BookmarkedScreen = ({ navigation }) => {
    const openPostHandler = post => {
        navigation.navigate('Post', {
            postId: post.id,
            date: post.date,
            booked: post.booked
        })
    }
    const bookmarkedData = DATA.filter(post => post.booked)
    return  <PostList data={ bookmarkedData } onOpen={ openPostHandler } />
}

BookmarkedScreen.navigationOptions = {
    headerTitle: 'Избранное',
    headerLeft: (
        <HeaderButtons HeaderButtonComponent={ AppHeaderIcon }>
            <Item title='menu' iconName='md-menu' onPress={ () => console.log('Press menu')}></Item>
        </HeaderButtons>
    )
}