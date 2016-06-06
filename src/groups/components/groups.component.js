import React from 'react';
import getGroupMembers from '../helpers/getGroupMembers.helper';

export default ({onSelectGroup, onDeleteGroup, groups, users}) => {
  const groupsWithMembers = groups.map((group) => {
    const members = getGroupMembers(group, users);

    return Object.assign({members}, group);
  });

  const createSelectGroupHandler = (group) =>  {
    return () => onSelectGroup(group);
  };
  const createDeleteGroupHandler = (group) => {
    return () => onDeleteGroup(group.id);
  };

  const getDeleteBtn = (group) => {
    if (group.members.length === 0) {
      return <button className="groups__delete" type="button" onClick={createDeleteGroupHandler(group)}>&times;</button>
    }

    return '';
  };

  return <div className="groups">
    <ul class="groups__list">
      {
        groupsWithMembers.map((group) => {
          return <li key={group.id}>
            <span className="groups__name" onClick={createSelectGroupHandler(group)}>{group.name}</span>
            ({group.members.length})
            {getDeleteBtn(group)}
          </li>;
        })
      }
    </ul>
  </div>;
};