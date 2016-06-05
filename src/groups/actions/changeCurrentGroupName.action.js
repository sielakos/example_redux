import {CHANGE_CUURENT_GROUP_NAME} from '../actionTypes';

export default ({name}) => {
  return {
    type: CHANGE_CUURENT_GROUP_NAME,
    name
  };
};