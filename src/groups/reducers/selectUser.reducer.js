/**
 * Replaces currentGroup.selectedUserId with new id
 *
 * @param state
 * @param id
 * @returns {*}
 */
export default (state, {id}) => {
  const {currentGroup} = state;
  const newGroup = Object.assign({}, currentGroup, {
    selectedUserId: id
  });

  return Object.assign({}, state, {
    currentGroup: newGroup
  });
};