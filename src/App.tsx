/** @format */

import "./App.scss";
import Button from "./components/Button/Button";
import Button2 from "./components/Button2/Button2";
import Button3 from "./components/button3/button3";
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
			<hr />
      <Button2 bgColor={"skyblue"} />
      <hr />
      <Button3 hasIcon={true}/>
			
    </>
  );
}

export default App;
