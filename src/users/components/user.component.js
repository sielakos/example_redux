import React from 'react';

export default ({onDeleteUser, onSelectUser, name, id, userGroups}) => {
  const selectUser = () => onSelectUser({name, id, userGroups, isNew: false});
  const deleteUser = () => onDeleteUser(id);

  return <div className="user">
      <span className="user__name" onClick={selectUser}>{name}</span>
      <button className="user__delete" type="button" onClick={deleteUser}>&times;</button>
      <ul className="user__groups">
        {
          userGroups.map(({id, name}) => {
            return <li className="user__group" key={id}>{name}</li>;
          })
        }
      </ul>
    </div>;
}