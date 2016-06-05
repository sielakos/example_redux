import {REMOVE_USER_FROM_CURRENT_GROUP} from '../actionTypes';

export default ({id}) => {
  return {
    type: REMOVE_USER_FROM_CURRENT_GROUP,
    id
  };
};