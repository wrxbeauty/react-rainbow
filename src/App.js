import React, {useState} from 'react'
import ColorBlock from './components/ColorBlock';
// import ColorForm from './components/ColorForm'
import './App.css';
import ColorForm from './components/ColorForm';

function App() {
  let [colors, setColors] = useState(['violet', 'blue', 'lightblue', 'greenyellow', 'yellow', 'orange', 'red'])
  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock key={i} color={color} />
    )
  })
  const addColor = (newColor) => {
    setColors ([...colors, newColor])
  }
  return (
    <div className="App">
      {colorMap}
      <ColorForm addColor={addColor} />
    </div>
  );
}

export default App;
