/**
 * Checks if group has members array if it has returns it, otherwise it creates new array based on users array.
 *
 * @param members
 * @param groupId
 * @param users
 * @returns {*}
 */
export default ({members, id: groupId}, users) => {
  if (Array.isArray(members)) {
    return members;
  }

  return users.filter(({userGroups}) => {
    return userGroups.some(({id}) => id === groupId);
  });
}
