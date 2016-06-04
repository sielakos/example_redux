import { connect } from 'react-redux'
import liftActionCreateToDispatch from '../../common/helpers/liftActionCreatorToDispatch.helper';
import UserList from '../components/userList.component';

export function mapStateTopProps({users: {users}}) {
  return {
    users
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    onDeleteUser: () => {
      //TODO: implement delete user action
    }
  }
}

export default connect(
  mapStateTopProps,
  mapDispatchToProps
)(UserList);