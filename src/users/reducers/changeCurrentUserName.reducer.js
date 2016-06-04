/**
 * Simple reducer that changes current user name
 *
 * @param state
 * @param name
 * @returns {*}
 */
export default (state, {name}) => {
  const {currentUser} = state;
  const newCurrentUser = Object.assign({}, currentUser, {name});

  return Object.assign({}, state, {currentUser: newCurrentUser});
}