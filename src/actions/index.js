import axios from 'axios';

import { SET_RECENT_POSTS } from './types';

export const fetchRecentPosts = () => {
    return function (dispatch) {
        axios
            .get('https://api.dailysmarty.com/posts')
            .then((response) => {
                dispatch({
                    type: SET_RECENT_POSTS,
                    payload: response.data.posts,
                });
            })
            .catch((error) => {
                console.error('fetchRecentPosts', error);
            });
    };
};

export const fetchPostWithQuery = (query) => {
    return function (dispatch) {
        axios
            .get(`https://api.dailysmarty.com/search?q=${query}`)
            .then((response) => {
                console.log(response.data.posts);
                // dispatch({
                //     type: SET_POSTS,
                //     payload: response.data.posts,
                // });
            })
            .catch((error) => {
                console.error('fetchPostWithQuery', error);
            });
    };
};
