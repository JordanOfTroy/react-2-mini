import React from 'react';

export default function ColorChanger(props) {

  console.log('color props', props);
  return (
    <select className="dropDownContainer"
    onChange = {e => props.updateColor(e.target.value)}
    disabled = {!props.canEdit}>
      <option value="black"> Black </option>
      <option value="blue"> Blue </option>
      <option value="green"> Green </option>
      <option value="red"> Red </option>
      <option value="pink"> Pink </option>
      <option value="purple"> Purple </option>
      <option value="orange"> Orange </option>
      <option value="yellow"> Yellow </option>
    </select>
  )
}