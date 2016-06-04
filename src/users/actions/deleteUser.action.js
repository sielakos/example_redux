import {DELETE_USER} from '../actionTypes';

export default (userId) => {
  return {
    type: DELETE_USER,
    userId
  };
};