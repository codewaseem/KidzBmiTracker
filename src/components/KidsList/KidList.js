import React from 'react'
import { NavButtonGroup } from "../NavButtonGroup/NavButtonGroup";
export const KidsList = ({kids,onKidSelect}) => {
  return (
    <NavButtonGroup buttonNames={kids.map(kid => kid.name)}
    />
  );
}
