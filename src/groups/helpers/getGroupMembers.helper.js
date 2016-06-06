/**
 * Gets users that have group with groupId
 *
 * @param groupId
 * @param users
 * @returns {*}
 */
export default ({id: groupId}, users) => {
  return users.filter(({userGroups}) => {
    return userGroups.some(({id}) => id === groupId);
  });
}
