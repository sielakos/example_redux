import React from 'react';
import UserList from '../users/containers/userList.container';
import UserForm from '../users/containers/userForm.container';

/**
 * Main application component.
 */
export default () => {
  return <div>
    <UserForm />
    <UserList />
  </div>;
}