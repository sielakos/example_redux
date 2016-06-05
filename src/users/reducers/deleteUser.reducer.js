/**
 * Simple reducer that delete users with given id, assumption that user has unique id is made.
 *
 * @param state
 * @param userId
 * @returns {*}
 */
export default (state, {userId}) => {
  const {users} = state;

  return Object.assign({}, state, {
    users: users.filter(({id}) => id !== userId)
  });
};