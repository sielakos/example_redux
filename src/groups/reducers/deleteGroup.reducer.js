/**
 * Removes group from groups list
 *
 * @param state
 * @param id id of group being removed
 */
export default (state, {id}) => {
  const {groups} = state;

  return Object.assign({}, state, {
    groups: groups.filter((group) => group.id !== id)
  });
};