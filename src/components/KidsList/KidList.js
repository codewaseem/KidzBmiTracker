import React from 'react'
import { Kid } from "../Kid/Kid";
export const KidsList = ({kids}) => {
  kids = ['Madiha','Noorain'];  
  return (
    <nav className="app-Main-SideNav-KidsList">
      {kids.map((kid,index)=>{
        return <Kid key={index} name={kid} id={index} />
      })}
    </nav>
  );
}
