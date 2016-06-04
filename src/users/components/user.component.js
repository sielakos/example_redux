import React from 'react';

export default ({onDeleteUser, name, userGroups}) => {
  return <div className="user">
      <span className="user__name">{name}</span>
      <ul className="user__groups">
        {
          userGroups.map(({name}) => {
            return <li className="user__group">{name}</li>;
          })
        }
      </ul>
    </div>;
}