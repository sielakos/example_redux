import {ADD_USER} from '../actionTypes';

export default (user) => {
  return {
    type: ADD_USER,
    user
  };
};