import React, { useState } from 'react';
import {data} from './constants/data'
import {AnimalCard} from './components/Card/AnimalCard'
import './App.css';
import { Emojis, Instructions, Modal } from './components'

const emojis = [
  {emoji: '😃', name: "happy face" },
  {emoji: '🤗', name: "hug face" },
  {emoji: '🤔', name: "thinking face" }
]

const App = () => {
  const [visible, setVisible] = useState(false);
  const [emojiId, setEmojiId] = useState()
  const [animalModal, setAnimalModal] = useState(false)
  const [animalInformation, setAnimalInformation] = useState([])
  const displayEmojiName = (event) => {
    setVisible(true)
    setEmojiId(event.target.id)
  }
  const closeModal = () => {
    setVisible(false)
    setAnimalModal(false)
  }

  const showAdditional = (additional) => {
    const ModalInformation = Object.entries(additional)
      .map(information => `${information[0]} : ${information[1]}`)
      .join('\n');
      setAnimalModal(true)
      setAnimalInformation(ModalInformation)
  }
  return (
    <>
    <div className="container">
      <h1>Hello World!</h1>
      <Instructions />
      <p>I'm writing JSX</p>
      <Emojis data={emojis} onClick={displayEmojiName}/>
      <h1>Animal</h1>
      <Modal visible={visible} closeModal={closeModal}>
        {emojiId}
      </Modal>
      <Modal visible={animalModal} closeModal={closeModal}>
          {animalInformation}
      </Modal>
    </div>
    <div className="wrapperAnimalCard">
        {data.map(animal => (
          <AnimalCard
            key={animal.name}
            name={animal.name}
            additional={animal.additional}
            diet={animal.diet}
            scientificName={animal.scientificName}
            size={animal.size}
            showAdditional={showAdditional}
          />
        ))}
      </div>
    </>
  );
}


export default App;
