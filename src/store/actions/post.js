import { LOAD_POSTS, TOGGLE_BOOKMARKED } from '../types'
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