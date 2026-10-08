import { useState } from "react";
import LightSwitch from "./LightSwitch";

function Room() {
  const [isOn, setIsOn] = useState(false);

  function handleToggle() {
    setIsOn(!isOn);
  }

  return (
    <div>
      <h1>
        {isOn ? "The room is bright" : "The room is dark"}
      </h1>

      <LightSwitch
        isOn={isOn}
        onToggle={handleToggle}
      />
    </div>
  );
}

export default Room;
