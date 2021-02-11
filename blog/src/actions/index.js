import jsonPlaceholder from '../apis/jsonPlaceholder'
import _ from 'lodash'

// this is THUNK stuff which lets us do aync things in actions..

export const fetchPosts = () => 
    async dispatch => {
        const response = await jsonPlaceholder.get('/posts')
        dispatch({ type: 'FETCH_POSTS', payload: response.data })
    }

export const fetchUser = (id) => 
    async dispatch => {
        const response = await jsonPlaceholder.get('/users/' + id)
        dispatch({ type: 'FETCH_USER', payload: response.data })
    }

export const fetchPostsAndUsers = () =>
    async (dispatch,getState) => {
        await dispatch(fetchPosts())
        const userIds = _.uniq(_.map(getState().posts, 'userId')) // Get the unique userids
        userIds.forEach(id => dispatch(fetchUser(id)))
    }