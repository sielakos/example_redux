import {SELECT_USER_IN_CURRENT_GROUP} from '../actionTypes';

export default ({id}) => {
  return {
    type: SELECT_USER_IN_CURRENT_GROUP,
    id
  };
};