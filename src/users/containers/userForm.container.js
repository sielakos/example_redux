import { connect } from 'react-redux'
import liftActionCreateToDispatch from '../../common/helpers/liftActionCreatorToDispatch.helper';
import addUser from '../actions/addUser.action';
import editUser from '../actions/editUser.action';
import changeCurrentUserName from '../actions/changeCurrentUserName.action';
import changeCurrentUserGroups from '../actions/changeCurrentUserGroups.action';
import UserForm from '../components/userForm.component';

function mapStateTopProps({users: {currentUser}, groups: {groups}}) {
  return Object.assign({}, currentUser, {
    groups
  });
}

function createSaveUserAction(user) {
  const {isNew} = user;
  
  return isNew ? addUser(user) : editUser(user);
}

function mapDispatchToProps(dispatch) {
  return {
    onSaveUser: liftActionCreateToDispatch(dispatch, createSaveUserAction),
    onChangeUserName: liftActionCreateToDispatch(dispatch, changeCurrentUserName),
    onChangeUserGroups: liftActionCreateToDispatch(dispatch, changeCurrentUserGroups)
  };
}

export default connect(
  mapStateTopProps,
  mapDispatchToProps
)(UserForm);