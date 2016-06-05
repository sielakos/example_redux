import combineReducersByActionType from '../../common/helpers/combineReducersByActionType.helper';
import * as actionTypes from '../actionTypes';
import addGroup from './addGroup.reducer';
import deleteGroup from './deleteGroup.reducer';
import editGroup from './editGroup.reducer';
import selectGroup from './selectGroup.reducer';
import changeCurrentGroupName from './changeCurrentGroupName.reducer';
import selectUser from './selectUser.reducer';
import addUser from './addUser.reducer';
import removeUser from './removeUser.reducer';

/**
 * Combines small groups reducers into one, based on action.type matching reducer will be run
 * @type function
 */
const combinedReducer = combineReducersByActionType({
  [actionTypes.ADD_GROUP]: addGroup,
  [actionTypes.DELETE_GROUP]: deleteGroup,
  [actionTypes.EDIT_GROUP]: editGroup,
  [actionTypes.SELECT_GROUP]: selectGroup,
  [actionTypes.CHANGE_CUURENT_GROUP_NAME]: changeCurrentGroupName,
  [actionTypes.SELECT_USER_IN_CURRENT_GROUP]: selectUser,
  [actionTypes.ADD_USER_TO_CURRENT_GROUP]: addUser,
  [actionTypes.REMOVE_USER_FROM_CURRENT_GROUP]: removeUser
});

/**
 * Main reducer for groups state
 *
 * @param state
 * @param action
 * @returns {{groups: Array}}
 */
export default (state = {groups: [], currentGroup: {name: '', isNew: true, members: []}}, action) => {
  return combinedReducer(state, action);
};