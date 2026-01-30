import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Counter from './components/Counter'  
import DisableCounter from './components/disableCounter'  
import ReachedLimit from './components/ReachedLimit'
import TextColorToggle from './components/TextColorToggle'  
import TimeGreeting from './components/TimeGreeting'
import InputLength from './components/InputLength'  
import InputLimit from './components/InputLimit'
import RemainingChars from './components/RemainingChars'
import ItemList from './components/ItemList'
import EmptyList from './components/EmptyList.jsx'
import AddList from './components/AddList.jsx'
import AddItemList from './components/AddItemsList.jsx'
import LastItem from './components/LastItem.jsx'
import SecificItem from './components/SecificItem.jsx'
import Selection from './components/Selection.jsx'
import Total from './components/Total.jsx'
import SquareCalculator from './components/SquareCalculator.jsx'
import TodoList from './components/TOdoList.jsx'
import TodoMark from './components/TodoMark.jsx'
import Completed from './components/Completed.jsx'
import Filter from './components/Filter.jsx'
import CustomButton from './components/CustomButton.jsx'
import Card from './components/Card.jsx'
import Multiple from './components/Multiple.jsx'
import Modal from './components/Modal.jsx'
import Close from './components/Close.jsx'
import SelectDropdown from './components/SelectDropdown.jsx'
import LoadingExample from './components/LoadingExample.jsx'
import ConsoleLogExample from './components/ConsoleLogExample.jsx'
import StateChangeLog from './components/StateChangeLog.jsx'
import ComponentA from './components/ComponentA.jsx'
import ImagePreview from './components/ImagePreview.jsx'
import TabSwitcher from './components/TabSwitcher.jsx'
import Switcher from './components/Switcher.jsx'
import CheckboxCounter from './components/CheckboxCounter.jsx'
import ConditionalSubmit from './components/ConditionalSubmit.jsx'
import LocalStorageExample from './components/LocalStorageExample.jsx'
import Clear from './components/Clear.jsx'
import TodoAllInOne from './components/TodoAllnOne.jsx'











function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

  <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Simple Counter App</h1>

      <Counter />
    </div>

     <div>
      <h1 style={{ textAlign: "center" }}>Disable Counter App</h1>
      <DisableCounter />
    </div>


<div>
  <ReachedLimit/>
</div>


<div>
  <TextColorToggle/>
</div>


<div>
  <TimeGreeting/>
</div>

<div>
  <InputLength/>
</div>


<div>
  <InputLimit/>
</div>

<div>
  <RemainingChars/>
</div>

<div>
  <ItemList/>
</div>

<div>
   <h1 style={{ textAlign: "center" }}>
        Conditional List Rendering
      </h1>

      <EmptyList />
</div>

<div>
  <AddList/>
</div>

<div>
    <h1 style={{ textAlign: "center" }}>
        Add Item to List
      </h1>
<AddItemList/>
  </div>

<div>
  <LastItem/>
</div>

<div>
  <SecificItem/>
</div>

<div>
  <Selection/>
</div>


<div>
  <Total/>
</div>

<div>

  <SquareCalculator/>
</div>

<div>
  <TodoList/>
</div>

<div>
  <TodoMark/>
</div>
<div>
  <Completed/>
</div>

<div>
  <Filter/>
</div>

<div>
  <CustomButton/>
</div>

<div>
  <Card/>
</div>

<div>
  <Multiple/>
</div>

<div>
  <Modal/>
</div>

<div>
  <Close/>
</div>

<div>
  <SelectDropdown/>
</div>

<div>
<LoadingExample/>
</div>


<div>
  <ConsoleLogExample/>
</div>

<div>
  <StateChangeLog/>
</div>

<div>
  <ComponentA/>
</div>


<div>
  <ImagePreview/>
</div>

<div>
   < tapSwitcher/>
</div>

<div>
  <Switcher/>
</div>


<div>
  <CheckboxCounter/>
</div>


<div>
  <ConditionalSubmit/>
</div>


<div>
  <LocalStorageExample/>
</div>

<div>
  <Clear/>
</div>


<div>
  <TodoAllInOne/>
</div>






    </>
  )
}

export default App
