/**
 * Replaces current group name with new one
 *
 * @param state
 * @param name
 */
export default (state, {name}) => {
  const {currentGroup} = state;
  const newGroup = Object.assign({}, currentGroup, {name});

  return Object.assign({}, state, {
    currentGroup: newGroup
  });
};