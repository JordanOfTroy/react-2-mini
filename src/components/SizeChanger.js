import React from 'react';

export default function SizeChanger(props) {

  console.log("size changer", props);
  
  return (
    <select className="dropDownContainer"
    onChange = {e => props.updateSize(e.target.value)}
    disabled = {!props.canEdit}>
      <option value="12"> 12 </option>
      <option value="13"> 13 </option>
      <option value="14"> 14 </option>
      <option value="20"> 20 </option>
      <option value="35"> 35 </option>
      <option value="75"> 72 </option>
    </select>
  )
}