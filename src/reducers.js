import { CHANGE_SEARCHTEXT } from './constants.js';

const initialState = {
  searchtext: ''
};

export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCHTEXT:
      return { ...state, searchtext: action.payload };
    default:
      return state;
  }
};
