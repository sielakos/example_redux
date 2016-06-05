import {UPDATE_USERS_FOR_GROUP} from '../actionTypes';

export default (group) => {
  return Object.assign({}, group, {
    type: UPDATE_USERS_FOR_GROUP
  });
};