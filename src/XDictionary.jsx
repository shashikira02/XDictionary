import { useState } from "react";

const dictionary = [
  { word: "React", meaning: "A JavaScript library for building user interfaces." },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." }
];

export default function XDictionary() {
  const [input, setInput] = useState('');
  const [definition, setDefinition] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    if (input.trim() === '') {
      setDefinition('Word not found in the dictionary.');
      return;
    }
    const word = dictionary.find(
      item => item.word.toLowerCase() === input.trim().toLowerCase()
    );
    if (word) {
      setDefinition(word.meaning);
    } else {
      setDefinition('Word not found in the dictionary.');
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Search for a word..."
        value={input}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        <h3>Definition:</h3>
        <p>{definition}</p>
      </div>
    </div>
  );
}
