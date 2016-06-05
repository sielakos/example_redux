import {connect} from 'react-redux'
import liftActionCreateToDispatch from '../../common/helpers/liftActionCreatorToDispatch.helper';
import getGroupMembers from '../helpers/getGroupMembers.helper';
import addGroup from '../actions/addGroup.action';
import addUser from '../actions/addUser.action';
import changeCurrentGroupName from '../actions/changeCurrentGroupName.action';
import editGroup from '../actions/editGroup.action';
import removeUser from '../actions/removeUser.action';
import selectUser from '../actions/selectUser.action';
import updateUsersForGroup from '../../users/actions/updateUsersForGroup.action';
import GroupForm from '../components/groupForm.component';

function mapStateTopProps({users: {users}, groups: {currentGroup}}) {
  return Object.assign({}, currentGroup, {
    users,
    members: getGroupMembers(currentGroup, users)
  });
}

function mapDispatchToProps(dispatch) {
  return {
    onSaveGroup: (group) => {
      const {isNew, name, members} = group;
      const id = Math.random().toString();
      const targetGroup = isNew ? {name, id, members, isNew: false} : group;

      dispatch(isNew ? addGroup(targetGroup) : editGroup(targetGroup));
      dispatch(updateUsersForGroup(targetGroup));
    },
    onChangeName: liftActionCreateToDispatch(dispatch, changeCurrentGroupName),
    onAddUser: liftActionCreateToDispatch(dispatch, addUser),
    onRemoveUser: liftActionCreateToDispatch(dispatch, removeUser),
    onSelectUser: liftActionCreateToDispatch(dispatch, selectUser)
  };
}

export default connect(
  mapStateTopProps,
  mapDispatchToProps
)(GroupForm);