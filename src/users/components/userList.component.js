import React from 'react'
import User from './user.component';

export default ({onDeleteUser, onSelectUser, users}) => {
  return <ul className="usersList">
    {
      users.map((user) => {
        return <li key={user.id}>
          <User
            onDeleteUser={onDeleteUser}
            onSelectUser={onSelectUser}
            {...user}
          />
        </li>;
      })
    }
  </ul>;
};