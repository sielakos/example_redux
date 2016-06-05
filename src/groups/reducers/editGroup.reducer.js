/**
 * Edit existing groups if found by id.
 * Assumption of unique id is made.
 *
 * @param state
 * @param group
 */
export default (state, {group}) => {
  const {groups} = state;

  return Object.assign({}, state, {
    groups: groups.map((other) => {
      if (other.id === group.id) {
        return group;
      }

      return other;
    }),
    currentGroup: {name: '', isNew: true, users: []}
  });
};