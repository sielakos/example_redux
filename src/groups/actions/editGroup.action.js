import {EDIT_GROUP} from '../actionTypes';

export default (group) => {
  return {
    type: EDIT_GROUP,
    group
  };
};