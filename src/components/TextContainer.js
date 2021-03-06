import React, { Component } from 'react';

export default class TextContainer extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
    this.updateText = this.updateText.bind(this)
  }

  updateText(e) {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    console.log("text field props", this.props);
    return (
      <div className="textContainer">
        <textarea 
          style={ {
            color: this.props.color, 
            fontSize: this.props.updateSize,
            fontFamily: this.props.fontFamily,} }
          onChange={this.updateText}
          value={this.state.text} 
          placeholder='Start typing your thoughts here!'
          cols="90"
          rows="30">
        </textarea>
      </div>
    )
  }
}




