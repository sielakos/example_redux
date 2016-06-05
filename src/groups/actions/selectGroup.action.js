import {SELECT_GROUP} from '../actionTypes';

export default (group) => {
  return {
    type: SELECT_GROUP,
    group
  };
};