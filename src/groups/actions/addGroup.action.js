import {ADD_GROUP} from '../actionTypes';

export default (group) => {
  return {
    type: ADD_GROUP,
    group
  };
};