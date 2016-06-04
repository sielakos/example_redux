import {SELECT_USER} from '../actionTypes';

export default (user) => {
  return {
    type: SELECT_USER,
    user
  };
};
