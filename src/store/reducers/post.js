import { LOAD_POSTS, TOGGLE_BOOKMARKED } from "../types";

const initialState = {
    allPosts: [],
    bookmarkedPosts: []
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_POSTS:
            return {
                ...state,
                allPosts: action.payload,
                bookmarkedPosts: action.payload.filter(post => post.booked)
            }
        case TOGGLE_BOOKMARKED:
            const allPosts = state.allPosts.map(post => {
                if (post.id === action.payload) {
                    post.booked = !post.booked
                } 
                return post
            })
            return {
                ...state,
                allPosts,
                bookmarkedPosts: allPosts.filter(post => post.booked)
            }

        default:
            return state
    }
    return state
}