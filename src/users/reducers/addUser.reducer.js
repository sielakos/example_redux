/**
 * Simple reducers that adds new user to state
 *
 * @param state
 * @param user
 */
export default (state, {user}) => {
  const {users} = state;

  return Object.assign({}, state, {users: users.concat(user)});
}