import {DELETE_GROUP} from '../actionTypes';

export default (id) => {
  return {
    type: DELETE_GROUP,
    id
  };
};