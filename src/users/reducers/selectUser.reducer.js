export default (state, {user}) => {
  return Object.assign({}, state, {currentUser: user});
};