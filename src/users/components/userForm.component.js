import React from 'react';

export default ({onSaveUser, onChangeUserName, groups, name, userGroups}) => {
  const onSubmit = (event) => {
    event.preventDefault();

    onSaveUser({name, userGroups});
  };

  const onChangeName = (event) => onChangeUserName(event.target.value)

  return <form onSubmit={onSubmit}>
      <input type="text" onChange={onChangeName} />
      <ul>
        {userGroups.map(({name}) => <li>{name}</li>)}
      </ul>
    </form>;
};