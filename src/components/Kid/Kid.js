import React from 'react'


export const Kid = ({ name, id }) => {
  return (
    <div className={`app-Main-SideNav-KidsList-Kid ${id === 1 ? 'selected' : ''}`}>
      <h4>{name}</h4>
    </div>
  );
}
