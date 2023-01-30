import {combineReducers} from 'redux';
import categories from './categories';
import blog from './blog';
import auth from './auth';
import cases from './cases'
export default combineReducers({
    categories,
    blog,
    auth,
    cases,
})