import axios from 'axios';
import {
    GET_CASES_LIST_SUCCESS,
    GET_CASES_LIST_FAIL,
    GET_CASE_SUCCESS,
    GET_CASE_FAIL,
}from "../actions/cases/types"

const initialState = {
    cases_list: null,
    case:null,
}

export default function cases(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case GET_CASES_LIST_FAIL:
            return {
                ...state,
                cases_list: null,
            }
        case GET_CASES_LIST_SUCCESS:
            return {
                ...state,
                cases_list: payload.results.posts,
            }
        case GET_CASE_SUCCESS:
            return {
                ...state,
                case: payload.post
            }
        case GET_CASE_FAIL:
            return {
                ...state,
                case: null,
            }
        default:
            return state
    }
}