import BoxForm from './components/BoxForm'
import DisplayBoxes from './components/DisplayBoxes'
import {useState} from 'react'
import './App.css';

function App() {

  const [boxList, setBoxList] = useState([]);

  return (
    <div className="App">
      <BoxForm boxList={boxList} setBoxList={setBoxList}/>
    </div>
  );
}

export default App;
