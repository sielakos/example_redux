/**
 * Small helper function that creates new reducer from reducersConfig array, which consist of {type, reducer} entries.
 * If action.type === entry.type then given reducer is run against state and action. 
 * Reducers are fired in order given in array, with state being result of reducers before fired against state and action.
 * Last state returned will be result of this newly create reducer.
 *
 * @param reducersConfig
 * @returns {function()}
 */
export default (reducersConfig) => {
  return (state, action) => {
    return reducersConfig.reduce((state, {type, reducer}) => {
      if (action.type === type) {
        return reducer(state, action);
      }

      return state;
    }, state);
  };
};