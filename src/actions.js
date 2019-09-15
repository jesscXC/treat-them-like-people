import { CHANGE_SEARCHTEXT } from './constants.js';

export const setSearchtext = text => {
  return {
    type: 'CHANGE_SEARCHTEXT',
    payload: text
  };
};
