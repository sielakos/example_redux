import combineReducersByActionType from '../../common/helpers/combineReducersByActionType.helper';
import * as actionTypes from '../actionTypes';
import addUser from './addUser.reducer';
import changeCurrentUserName from './changeCurrentUserName.reducer';

const combinedReducer = combineReducersByActionType({
  [actionTypes.ADD_USER]: addUser,
  [actionTypes.CHANGE_CURRENT_USER_NAME]: changeCurrentUserName
});

/**
 * Main users reducers, responsible for combining all previous reducers
 *
 * @param state
 * @param action
 */
export default (state = {users: [], currentUser: {name: '', userGroups: []}}, action) => {
  return combinedReducer(state, action);
}