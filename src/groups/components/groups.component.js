import React from 'react';
import getGroupMembers from '../helpers/getGroupMembers.helper';

export default ({onSelectGroup, onDeleteGroup, groups, users}) => {
  const createSelectGroupHandler = (group) =>  {
    const members = getGroupMembers(group, users);
    
    return () => onSelectGroup(Object.assign({members}, group));
  };
  const createDeleteGroupHandler = (group) => {
    return () => onDeleteGroup(group.id);
  };

  return <div className="groups">
    <div>Groups:</div>
    <ul class="groups__list">
      {
        groups.map((group) => {
          return <li key={group.id}>
            <span onClick={createSelectGroupHandler(group)}>{group.name}</span>
            <button type="button" onClick={createDeleteGroupHandler(group)}>&times;</button>
          </li>;
        })
      }
    </ul>
  </div>;
};