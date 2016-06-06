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


  return <form className="form" onSubmit={submit}>
    <div className="form__title">{isNew ? 'Add group': 'Edit group'}</div>
    <div className="form__section">
      <label className="form__label">group name:</label>
      <input className="form__input" type="text" value={name} onChange={changeName} />
    </div>
    <div className="form__section">
      <label className="form__label">users:</label>
      <ul>
        {
          members.map(({id, name}) => {
            return <li className="form__list-position" key={id}>
              {name}
              <button className="form__remove" type="button" onClick={createRemoveUserHandler(id)}>&times;</button>
            </li>;
          })
        }
      </ul>
      <label className="form__label">select user:</label>
      <select className="form__input" value={selectedUserId} onChange={selectUser}>
        {
          users.map(({id, name}) => <option value={id} key={id}>{name}</option>)
        }
      </select>
    </div>
    <div className="form__section">
      <button className="form__btn" type="button" onClick={addUser}>add user</button>
    </div>
    <div className="form__section">
      <button className="form__btn" type="submit">save</button>
    </div>
  </form>;
};