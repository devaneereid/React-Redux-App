import axios from 'axios';

export const FETCH_QUOTE_START = 'FETCH_QUOTE_START';
export const FETCH_QUOTE_SUCCESS = 'FETCH_QUOTE_SUCCESS';
export const FETCH_QUOTE_FAILURE = 'FETCH_QUOTE_FAILURE';

export const getQuote = () => dispatch => {
    dispatch({ type: FETCH_QUOTE_START });
    axios
        .get(`https://ron-swanson-quotes.herokuapp.com/v2/quotes`)
        .then(data => { console.log(data)
            dispatch({ type: FETCH_QUOTE_SUCCESS,
            payload: data });
        })
        .catch(err => {
            dispatch({ type: FETCH_QUOTE_FAILURE, 
            payload: err.response });
        });
};