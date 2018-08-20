import React from 'react';

export default function FamilyChanger(props) {

  console.log("font props", props);
  return (
    <select className="dropDownContainer"
    onChange = {e => props.updateFont(e.target.value)}
    disabled = {!props.canEdit}>
      <option value="monospace"> Monospace </option>
      <option value="arial"> Arial </option>
      <option value="courier"> Courier </option>
    </select>
  )
}