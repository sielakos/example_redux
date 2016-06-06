import {connect} from 'react-redux'
import liftActionCreateToDispatch from '../../common/helpers/liftActionCreatorToDispatch.helper';
import deleteGroup from '../actions/deleteGroup.action';
import selectGroup from '../actions/selectGroup.action';
import Groups from '../components/groups.component';

function mapStateTopProps({groups: {groups}, users: {users}}) {
  return {groups, users};
}

function mapDispatchToProps(dispatch) {
  return {
    onSelectGroup: liftActionCreateToDispatch(dispatch, selectGroup),
    onDeleteGroup: liftActionCreateToDispatch(dispatch, deleteGroup)
  };
}

export default connect(
  mapStateTopProps,
  mapDispatchToProps
)(Groups);