/**
 * Returns objects representing default, new, empty current group
 *
 * @returns {{name: string, isNew: boolean, members: Array}}
 */
export default () => {
  return {name: '', isNew: true, members: []};
};