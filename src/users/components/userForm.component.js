import React from 'react';

/**
 * User form component. It has ability to add new user or edit existing one.
 *
 * @param onSaveUser function that dispatches save user action
 * @param onChangeUserName function that dispatches current user name change action
 * @param groups all groups in application
 * @param name current user name
 * @param userGroups current user groups
 */
export default ({onSaveUser, onChangeUserName, onChangeUserGroups, groups, name, isNew, id, userGroups}) => {
  const onChangeName = (event) => onChangeUserName(event.target.value);
  const onChangeGroups = (event) => {
    const selectedGroups = Array.prototype.map.call(
      event.target.selectedOptions,
      ({value}) => {
        return groups.filter(({id}) => id === value)[0];
      }
    );

    onChangeUserGroups(selectedGroups);
  };
  const onSubmit = (event) => {
    event.preventDefault();

    onSaveUser({id, name, userGroups, isNew});
  };

  return <form onSubmit={onSubmit}>
      <input type="text" value={name} onChange={onChangeName} />
      <select multiple={true} value={userGroups.map(({id}) => id)} onChange={onChangeGroups}>
        {
          groups.map(({id, name}) => {
            return <option value={id} key={id}>{name}</option>;
          })
        }
      </select>
      <button type="submit">save</button>
    </form>;
};