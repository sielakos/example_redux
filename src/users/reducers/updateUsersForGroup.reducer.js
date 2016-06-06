/**
 * Makes sure that each user listed as member of group with given id has it on userGroups list.
 * Also removes group from non-member users userGroups list.
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
      const userIsMember = isMember(user);
      const userHasGroup = hasGroup(user);

      // Removes group from users that are not members and have group in userGroup list
      if (!userIsMember && userHasGroup) {
        return Object.assign({}, user, {
          userGroups: user.userGroups.filter((group) => group.id !== id)
        });
      }

      // Adds group to user that is member and has not group in its userGroup list
      if (userIsMember && !userHasGroup) {
        return Object.assign({}, user, {
          userGroups: user.userGroups.concat({id, name})
        });
      }

      //Returns all other users unchanged
      return user;
    })
  })
};