import BoxForm from './components/BoxForm'
import DisplayBoxes from './components/DisplayBoxes'
import {useState} from 'react'
import './App.css';

function App() {

  const [boxList, setBoxList] = useState([]);

  return (
    <div className="App">
      <h1>Box Generator</h1>
      <BoxForm boxList={boxList} setBoxList={setBoxList}/>
      <DisplayBoxes boxList={boxList} />
    </div>
  );
}

export default App;
