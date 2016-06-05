import React from 'react';
import UserList from '../users/containers/userList.container';
import UserForm from '../users/containers/userForm.container';
import GroupForm from '../groups/containers/groupForm.container';

/**
 * Main application component.
 */
export default () => {
  return <div>
    <UserForm />
    <UserList />
    <GroupForm />
  </div>;
}