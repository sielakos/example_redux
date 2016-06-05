/**
 * Sets given group as currently selected
 *
 * @param state
 * @param group
 * @returns {*}
 */
export default (state, {group}) => {
  return Object.assign({}, state, {
    currentGroup: group
  });
}