import combineReducersByActionType from '../../common/helpers/combineReducersByActionType.helper';
import * as actionTypes from '../actionTypes';
import addUser from './addUser.reducer';
import editUser from './editUser.reducer';
import selectUser from './selectUser.reducer';
import deleteUser from './deleteUser.reducer';
import changeCurrentUserName from './changeCurrentUserName.reducer';
import changeCurrentUserGroups from './changeCurrentUserGroups.reducer';

const combinedReducer = combineReducersByActionType({
  [actionTypes.ADD_USER]: addUser,
  [actionTypes.CHANGE_CURRENT_USER_NAME]: changeCurrentUserName,
  [actionTypes.CHANGE_CURRENT_USER_GROUPS]: changeCurrentUserGroups,
  [actionTypes.SELECT_USER]: selectUser,
  [actionTypes.EDIT_USER]: editUser,
  [actionTypes.DELETE_USER]: deleteUser
});

/**
 * Main users reducers, responsible for combining all previous reducers
 *
 * @param state
 * @param action
 */
export default (state = {users: [], currentUser: {name: '', userGroups: [], isNew: true}}, action) => {
  return combinedReducer(state, action);
}