import { connect } from 'react-redux'
import liftActionCreateToDispatch from '../../common/helpers/liftActionCreatorToDispatch.helper';
import selectUser from '../actions/selectUser.action';
import deleteUser from '../actions/deleteUser.action';
import UserList from '../components/userList.component';

export function mapStateTopProps({users: {users}}) {
  return {
    users
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    onSelectUser: liftActionCreateToDispatch(dispatch, selectUser),
    onDeleteUser: liftActionCreateToDispatch(dispatch, deleteUser)
  }
}

export default connect(
  mapStateTopProps,
  mapDispatchToProps
)(UserList);