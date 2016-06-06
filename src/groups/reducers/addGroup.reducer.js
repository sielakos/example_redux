import getDefaultCurrentGroup from '../helpers/getDefaultCurrentGroup.helper';

/**
 * Adds new groups to groups list
 *
 * @param state
 * @param group
 * @returns {*}
 */
export default (state, {group}) => {
  const {groups} = state;

  return Object.assign({}, state, {
    groups: groups.concat(group),
    currentGroup: getDefaultCurrentGroup()
  });
};