/**
 * Set user as currently active
 *
 * @param state
 * @param user
 * @returns {*}
 */
export default (state, {user}) => {
  return Object.assign({}, state, {currentUser: user});
};