import React from 'react';

export default ({onSaveGroup, onChangeName, onAddUser, onRemoveUser, onSelectUser, name, id, isNew, members, selectedUserId, users}) => {
  const submit = (event) => {
    event.preventDefault();

    onSaveGroup({name, id, isNew, members});
  };
  const changeName = (event) => onChangeName({name: event.target.value});
  const createRemoveUserHandler = (id) => {
    return () => onRemoveUser({id});
  };
  const addUser = () => {
    const user = selectedUserId ? users.filter(({id}) => id === selectedUserId)[0] : users[0];

    if (user) {
      onAddUser(user);
    }
  };
  const selectUser = (event) => {
    onSelectUser({id: event.target.value});
  };


  return <form onSubmit={submit}>
    <input type="text" value={name} onChange={changeName} /><br />
    <ul>
      {
        members.map(({id, name}) => {
          return <li key={id}>
            {name}
            <button type="button" onClick={createRemoveUserHandler(id)}>&times;</button>
          </li>;
        })
      }
    </ul><br />
    <select value={selectedUserId} onChange={selectUser}>
      {
        users.map(({id, name}) => <option value={id} key={id}>{name}</option>)
      }
    </select>
    <button type="button" onClick={addUser}>Add User</button>
  </form>;
};