import { LOAD_POSTS, TOGGLE_BOOKMARKED, REMOVE_POST, ADD_POST } from '../types'
import { DATA } from '../../data'

export const loadPosts = () => {
    return {
        type: LOAD_POSTS,
        payload: DATA        
    }
}

export const toggleBookmarked = id => {
    return {
        type: TOGGLE_BOOKMARKED,
        payload: id
    }
}

export const removePost = id => {
    return {
        type: REMOVE_POST,
        payload: id
    }
}

export const addPost = post => {
    post.id = Date.now().toString()

    return {
        type: ADD_POST,
        payload: post
    }
}