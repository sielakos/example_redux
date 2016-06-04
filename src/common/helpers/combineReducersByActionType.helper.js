/**
 * Small helper function that creates new reducer from reducersConfig object,
 * with keys being action types and values reducers.
 *
 * @param reducersConfig
 * @returns {function()}
 */
export default (reducersConfig) => {
  return (state, action) => {
    if (reducersConfig[action.type]) {
      return reducersConfig[action.type](state, action);
    }

    return state;
  };
};