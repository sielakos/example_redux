/**
 * Simple reducer that changes current user groups
 *
 * @param state
 * @param groups
 * @returns {*}
 */
export default (state, {groups}) => {
  const {currentUser} = state;
  const newCurrentUser = Object.assign({}, currentUser, {userGroups: groups});

  return Object.assign({}, state, {currentUser: newCurrentUser});
}