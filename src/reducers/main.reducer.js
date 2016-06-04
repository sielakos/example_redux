import { combineReducers } from 'redux';
import users from '../users/reducers/users.reducer';
import groups from '../groups/reducers/groups.reducer';

export default combineReducers({
  users,
  groups
});