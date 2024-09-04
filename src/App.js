import { useState } from "react";

function App() {
  const [likes, setLikes] = useState(0);
  const [value, setValue] = useState('Input placeholder')

  function increment() {
    setLikes(likes + 1);
  }

  function decrement() {
    setLikes(likes - 1);
  }

  function changeValue(event) {
    setValue(event.target.value);
  }

  return (
    <div className="App">
      <h1>Likes: {likes}</h1>
      <h1>Input Value: {value}</h1>
      <input value={value} onChange={changeValue} />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

    </div>
  );
}

export default App;
