import React from 'react'


export const Kid = ({ name, id, isSelected,onKidSelect }) => {
  return (
    <div className={`app-Main-SideNav-KidsList-Kid ${isSelected ? 'selected' : ''}`}
      onClick={() => {onKidSelect(id)}}
    >
      <h4>{name}</h4>
    </div>
  );
}
