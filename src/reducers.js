import { CHANGE_SEARCHTEXT } from './constants.js';

const initialState = {
  searchtext: ''
};

export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCHTEXT:
      return Object.assign({}, state, { searchtext: action.payload });
  }
};
