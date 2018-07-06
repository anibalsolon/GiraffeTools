import { combineReducers } from 'redux';

import node from './node';


const byId = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_NODE':
      return {
        ...state,
        [action.id]: node(state[action.id], action),
      };
    case 'REMOVE_NODE':
      // #TODO to be implemented in #72
      return state;
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NODE':
      return [...state, action.id];
    default:
      return state;
  }
};

const nodes = combineReducers({
  byId,
  allIds,
});

export default nodes;

// const getAllNodes = (state) =>
//   state.allIds.map(id => state.byId[id]);