import { useRef, useState } from 'react'
import './App.css'
import Modal from './Modal';
import Sidebar from './Sidebar';

function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);
  const [isModalVisible, setVisible] = useState(false);
  const [isSidebarVisible, setVisibility] = useState(false);
  const [isTextVisible, setText] = useState(false);
  const inputRef = useRef(null);
  const [text, setTexts] = useState("");

  var c = 0;
  function startCount() {
    t = setInterval(() => {
      setNum((prev) => prev + 1);
    }, 1000);
  }
  function toggleModal() {
    setVisible((prev) => !prev);
  }
  function toggleSidebar() {
    setVisibility((prev) => !prev);
  }
  function showText() {
    setTexts(inputRef.current.value);
  }
  return (
    <>
      {/* Counter */}
      <h1>counter</h1>
      <span>{num}</span>
      <br />
      <button className="btn bg-green-500 rounded-full px-4 py-2" onClick={startCount}>Start</button>git --versiongit --version
      <hr />
      <br />
      {/*Plus Minus button*/}
      <h1>Increase Decrease button</h1>
      <button className="btn bg-gray-400 rounded px-1 py-1" onClick={() => setCount((count) => count - 1)}>-</button>
      <span>{count}</span>
      <button className="btn bg-gray-400 rounded px-1 py-1" onClick={() => setCount((count) => count + 1)}>+</button>
      <br />
      <hr />
      {/* Show and hide text */}
      <h1>Spoiler text</h1>
      <button  className="btn bg-green-500 rounded-full px-4 py-2" onClick={() => {
        setText((prev) => !prev)
      }}>{isTextVisible ? "Hide text" : "Show text"}</button>
      {isTextVisible && <p>This is the text</p>}
      <hr />
      {/* Modal */}
      <h1>Modal</h1>
      <button className='btn bg-green-500 rounded-full px-4 py-2' onClick={toggleModal}>
        {isModalVisible ? "Close Modal" : "Open Modal"}
      </button>
      {isModalVisible && <Modal setVisible={setVisible} />}
      <hr />
      {/* Sidebar */}
      <h1>Sidebar</h1>
      <button className="btn bg-green-500 rounded-full px-4 py-2" onClick={toggleSidebar}>{isSidebarVisible ? "Close sidebar" : "Open sidebar"}</button>
      {isSidebarVisible && <Sidebar setVisibil={setVisibility} />}
      <hr />
      {/* Getting input and displaying */}
      <h1>Getting input</h1>
      <input className="border border-gray-400 p-2" type="text" ref={inputRef} />
      <button className="btn bg-green-500 rounded-full px-4 py-2" onClick={showText}>Print text</button>
      <p>{text}</p>
    </>
  )
}

export default App
