import React from 'react'
import User from './user.component';

export default ({onDeleteUser, users}) => {
  return <ul className="usersList">
    {
      users.map((user) => {
        return <li>
          <User
            onDeleteUser={onDeleteUser}
            {...user}
          />
        </li>;
      })
    }
  </ul>;
};