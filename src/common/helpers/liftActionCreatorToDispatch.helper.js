/**
 * Lifts action creator function to dispatch.
 *
 * @param dispatch
 * @param actionCreator
 * @returns {function(): *}
 */
export default (dispatch, actionCreator) => {
  return (...args) => dispatch(actionCreator(...args));
};