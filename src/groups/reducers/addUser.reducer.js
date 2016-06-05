/**
 * Adds user to current group
 *
 * @param state
 * @param action
 */
export default (state, {user}) => {
  const {currentGroup} = state;
  const {members = []} = currentGroup;
  const newGroup = Object.assign({}, currentGroup, {
    members: members.concat(user)
  });

  return Object.assign({}, state, {
    currentGroup: newGroup
  });
};