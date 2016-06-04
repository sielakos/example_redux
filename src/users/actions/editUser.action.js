import {EDIT_USER} from '../actionTypes';

export default (user) => {
  return {
    type: EDIT_USER,
    user
  };
};