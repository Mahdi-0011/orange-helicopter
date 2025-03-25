/** @format */

import "./App.scss";
import Button from "./components/Button/Button";
import Pulse from "./components/Puls/Pulse";
import Rotation from "./components/Rotation/Rotation";
import ScalingBox from "./components/scalingbox/scalingbox";

function App() {
  return (
    <>
      <h1>🍊🚁</h1>
      <p>a demo for students</p>
      <hr />
      <Button />
      <hr />
      <ScalingBox />
      <hr />
      <Rotation />
      <hr />
      <Pulse />
    </>
  );
}

export default App;
