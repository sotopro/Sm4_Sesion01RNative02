import React, { Component, useState, Fragment } from 'react';
import './App.css';
import { Emojis, Instructions, Modal } from './components'

const emojis = [
  {emoji: '😃', name: "happy face" },
  {emoji: '🤗', name: "hug face" },
  {emoji: '🤔', name: "thinking face" }
]

// const App = () => {
//   const [visible, setVisible] = useState(false);
//   const [emojiId, setEmojiId] = useState()
//   const displayEmojiName = (event) => {
//     setVisible(true)
//     setEmojiId(event.target.id)
//   }
//   const closeModal = () => {
//     setVisible(false)
//   }
//   return (
//     <div className="container">
//       <h1>Hello World!</h1>
//       <Instructions />
//       <p>I'm writing JSX</p>
//       <Emojis data={emojis} onClick={displayEmojiName}/>
//       <Modal visible={visible} closeModal={closeModal}>
//         {emojiId}
//       </Modal>
//     </div>
//   );
// }

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      visible: false,
      emojiId: ''
    }

  }
    displayEmojiName = (event) => {
      this.setState({
        visible: true,
        emojiId: event.target.id
      })
    }
    closeModal = () => {
      this.setState({
        visible: false
      })
    }
    render(){
      const { visible, emojiId } = this.state;
      return (
        <div className="container">
          <h1>Hello World!</h1>
          <Instructions />
          <p>I'm writing JSX</p>
          <Emojis data={emojis} onClick={this.displayEmojiName}/>
          <Modal visible={visible} closeModal={this.closeModal}>
            {emojiId}
          </Modal>
        </div>
      );
    }
}

export default App;
