import {connect} from 'react-redux'
import liftActionCreateToDispatch from '../../common/helpers/liftActionCreatorToDispatch.helper';
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
    users
  });
}

function mapDispatchToProps(dispatch) {
  return {
    onSaveGroup: (group) => {
      const {isNew, name, members} = group;
      const id = isNew? Math.random().toString() : group.id;

      dispatch(isNew ? addGroup({name, id, isNew: false}) : editGroup({name, id, isNew: false}));
      dispatch(updateUsersForGroup({id, name, members, isNew: false}));
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