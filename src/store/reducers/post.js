import { LOAD_POSTS, TOGGLE_BOOKMARKED, REMOVE_POST, ADD_POST } from "../types";

const initialState = {
    allPosts: [],
    bookmarkedPosts: [],
    loading: true
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_POSTS:
            return {
                ...state,
                allPosts: action.payload,
                bookmarkedPosts: action.payload.filter(post => post.booked),
                loading: false
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
        case REMOVE_POST:
            return {
                ...state,
                allPosts: state.allPosts.filter(p => p.id !== action.payload),
                bookmarkedPosts:  state.bookmarkedPosts.filter(p => p.id !== action.payload)
            }
        case ADD_POST:
            return {
                ...state,
                allPosts: [{ ...action.payload }, ...state.allPosts],
            }
        
        default:
            return state
    }
}
