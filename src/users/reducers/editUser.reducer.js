/**
 * Simple reducers that changes existing user.
 * Assumption that user has unique id is made.
 *
 * @param state
 * @param user
 */
export default (state, {user}) => {
  const {users} = state;

  return Object.assign({}, state, {
    users: users.map((other) => {
      if (other.id === user.id) {
        return user;
      }

      return other;
    }),
    currentUser: {name: '', userGroups: [], isNew: true}
  });
}