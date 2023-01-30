import axios from 'axios';
import {
    GET_CASES_LIST_SUCCESS,
    GET_CASES_LIST_FAIL,
    GET_CASE_SUCCESS,
    GET_CASE_FAIL,
}from "./types"

export const get_case = (slug) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL},/api/cases/${slug}`, config)
        
        if (response.status === 200) {
            dispatch({
                type: GET_CASE_SUCCESS,
                payload: response.data,
            })
        } else {
            dispatch({
                type: GET_CASE_FAIL,
            });
        };
    } catch (err) {
        dispatch({
            type: GET_CASE_FAIL,
        })
    }
}

export const get_case_list = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/cases, config`)
        
        if(res.status === 200){
            dispatch({
                type: GET_CASES_LIST_SUCCESS,
                payload: res.data
            });
        }else{
            dispatch({
                type: GET_CASES_LIST_FAIL
            });
        }

    } catch (err) {
        dispatch({
            type: GET_CASES_LIST_FAIL
        });
    }
}