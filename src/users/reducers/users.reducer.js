import combineReducersByActionType from '../../common/helpers/combineReducersByActionType.helper';
import * as actionTypes from '../actionTypes';
import addUser from './addUser.reducer';
import editUser from './editUser.reducer';
import selectUser from './selectUser.reducer';
import deleteUser from './deleteUser.reducer';
import changeCurrentUserName from './changeCurrentUserName.reducer';
import changeCurrentUserGroups from './changeCurrentUserGroups.reducer';
import updateUsersForGroup from './updateUsersForGroup.reducer';

/**
 * Combines small user reducers into one, based on action.type matching reducer will be run
 * @type function
 */
const combinedReducer = combineReducersByActionType({
  [actionTypes.ADD_USER]: addUser,
  [actionTypes.CHANGE_CURRENT_USER_NAME]: changeCurrentUserName,
  [actionTypes.CHANGE_CURRENT_USER_GROUPS]: changeCurrentUserGroups,
  [actionTypes.SELECT_USER]: selectUser,
  [actionTypes.EDIT_USER]: editUser,
  [actionTypes.DELETE_USER]: deleteUser,
  [actionTypes.UPDATE_USERS_FOR_GROUP]: updateUsersForGroup
});

/**
 * Main users reducers, responsible for combining all user reducers.
 * Users state consist of:
 * 1. users array, which is list of all users
 * 2. currentUser object, which is currently active user either new or existing
 *
 * Each user has name, list of groups that it belongs to, flag that tells if it is new user
 *
 * @param state
 * @param action
 */
export default (state = {users: [], currentUser: {name: '', userGroups: [], isNew: true}}, action) => {
  return combinedReducer(state, action);
}