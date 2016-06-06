import React from 'react';
import UserList from '../users/containers/userList.container';
import UserForm from '../users/containers/userForm.container';
import GroupForm from '../groups/containers/groupForm.container';
import Groups from '../groups/containers/groups.container';
import '../styles/styles.scss';

/**
 * Main application component.
 */
export default () => {
  return <div className="main">
    <div className="main__section">
      <h3 className="main__section-title">Users:</h3>
      <UserForm />
      <UserList />
    </div>
    <div className="main__section">
      <h3 className="main__section-title">Groups:</h3>
      <GroupForm />
      <Groups />
    </div>
  </div>;
}