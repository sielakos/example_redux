import {CHANGE_CURRENT_USER_GROUPS} from '../actionTypes';

export default (groups) => {
  return {
    type: CHANGE_CURRENT_USER_GROUPS,
    groups
  };
};