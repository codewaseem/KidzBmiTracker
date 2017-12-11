import React from 'react'
import { Kid } from "../Kid/Kid";
export const KidsList = ({kids,selectedKid,onKidSelect}) => {
  return (
    <nav className="app-Main-SideNav-KidsList">
      {kids.map((kid,index)=>{
        return <Kid key={kid.id} name={kid.name} id={kid.id} isSelected={kid.id === selectedKid.id} onKidSelect={onKidSelect} />
      })}
    </nav>
  );
}
