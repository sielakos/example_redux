/**
 * Simple reducers that adds new user to state
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