import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {

 constructor (props) {
   super (props)

   this.state = {
     color: 'black',
     edit: true,
     font: 'monospace',
     size: '12px'
   }
this.updateColor = this.updateColor.bind(this)
this.updateEdit = this.updateEdit.bind(this)
this.updateFont = this.updateFont.bind(this)
this.updateSize = this.updateSize.bind(this)

 }
  updateColor (val) {
    this.setState({
      color: val
    })
  }
  updateSize (val) {
    this.setState({
      size: val
    })
  }
  updateFont (val) {
    this.setState({
      font: val
    })
  }
   updateEdit (val) {
     if (val === "true") {
    this.setState({
      edit: true
    })} else {
      this.setState({
        edit: false
      })
    }
  }

  render() {
    console.log('hi mom');
    
    return (
      <div>
        <div className="headerBar">
          <EditToggle
          updateEdit = {this.updateEdit}/>
          <ColorChanger
          updateColor = {this.updateColor}
          canEdit = {this.state.edit}/>
          <SizeChanger
          updateSize = {this.updateSize}
          canEdit = {this.state.edit}/>
          <FamilyChanger
          updateFont = {this.updateFont}
          canEdit = {this.state.edit}/>
        </div>
        <div className="textArea">
          <TextContainer
          color = {this.state.color}
          updateSize = {this.state.size}
          fontFamily = {this.state.font}/>
        </div>
      </div>
    )
  }
}

export default App;
