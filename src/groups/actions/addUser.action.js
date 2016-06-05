import {ADD_USER_TO_CURRENT_GROUP} from '../actionTypes';

export default (user) => {
  return {
    type: ADD_USER_TO_CURRENT_GROUP,
    user
  };
};