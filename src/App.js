import './App.css';
import Emojis from './Components/Emojis';

const emojis = [
  {emoji: '😃', name: "happy face" },
  {emoji: '🤗', name: "hug face" },
  {emoji: '🤔', name: "thinking face" }
]

const App = () => {
  const displayEmojiName = (event) => alert(event.target.id);
  return (
    <div className="container">
      <h1>Hello World!</h1>
      <p>I'm writing JSX</p>
      <Emojis data={emojis} onClick={displayEmojiName}/>
    </div>
  );
}

export default App;
