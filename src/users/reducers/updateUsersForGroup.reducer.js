/**
 * Makes sure that each user listed as member of group with given id has it on userGroups list
 *
 * @param state
 * @param id
 * @param members
 */
export default (state, {id, name, members}) => {
  const {users} = state;

  function isMember({id}) {
    return members.some((member) => member.id === id);
  }

  function hasGroup({userGroups}) {
    return userGroups.some((group) => group.id === id);
  }
  
  return Object.assign({}, state, {
    users: users.map((user) => {
      if (!isMember(user) || hasGroup(user)) {
        return user;
      }

      return Object.assign({}, user, {
        userGroups: user.userGroups.concat({id, name})
      });
    })
  })
};