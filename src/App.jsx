import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MySlider from "./component/MySlider/MySlider";
import MyPanel from "./component/MyPanel/MyPanel";
import MyCalculator from "./component/MyCalculator/MyCalculator";

function App() {
  const [r, setR] = useState(128);
  const [g, setG] = useState(128);
  const [b, setB] = useState(128);
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>5b1g0037王淮錡</h1>
      <h2>我的第一個元件：Slider</h2>
      <div>
        <p>R:<MySlider value={r} onChange={setR} /></p>
        <p>G:<MySlider value={g} onChange={setG} /></p>
        <p>B:<MySlider value={b} onChange={setB} /></p>
      </div>
      <br/>
      <h2>第二個元件：RGB色彩面板</h2>
      <MyPanel r={r} g={g} b={b} />
      <h2>計算機</h2>
      <MyCalculator />
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
      </p>
    </>
  );
}

export default App;