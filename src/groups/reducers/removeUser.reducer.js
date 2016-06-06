/**
 * Adds user to current group
 *
 * @param state
 * @param action
 */
export default (state, {id}) => {
  const {currentGroup} = state;
  const newGroup = Object.assign({}, currentGroup, {
    members: currentGroup.members.filter((user) => user.id !== id)
  });

  return Object.assign({}, state, {
    currentGroup: newGroup
  });
};