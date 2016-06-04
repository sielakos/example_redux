import {CHANGE_CURRENT_USER_NAME} from '../actionTypes';

export default (name) => {
  return {
    type: CHANGE_CURRENT_USER_NAME,
    name
  };
}