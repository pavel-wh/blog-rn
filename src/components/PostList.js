import React from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'
import { Post } from './Post'

export const PostList = ({ data, onOpen }) => {
    if(!data.lenght) {
        return (
            <View style={ styles.wrapper }>
                <Text style={ styles.noItems }>Тут пока нету постов...</Text>
            </View>
        )
    }
    return (
        <View style={ styles.wrapper }>
            <FlatList 
                data={ data } 
                keyExtractor={ post => post.id.toString() }
                renderItem={ ({ item }) => <Post post={ item } onOpen={ onOpen } /> }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    },
    noItems: {
        fontFamily: 'open-sans-regular',
        fontSize: 16,
        textAlign: 'center'
    }
})