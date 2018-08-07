import {createStore } from 'redux';

function reducer(state){
    return state;
}

var initialState={
    chore: 'mop'
}

export default createStore(reducer, initialState);