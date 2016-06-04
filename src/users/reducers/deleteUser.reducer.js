export default (state, {userId}) => {
  const {users} = state;

  return Object.assign({}, state, {
    users: users.filter(({id}) => id !== userId)
  });
};