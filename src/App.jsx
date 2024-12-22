import { useState } from "react";
import Countdown from "./components/Countdown";
import Present from "./components/Present";

function App() {
  const [isCountdownComplete, setIsCountdownComplet] = useState(false);

  const handleCountdownComplete = () => {
    setIsCountdownComplet(true);
  };

  return (
    <div>
      {isCountdownComplete ? (
        <Present />
      ) : (
        <Countdown onComplete={handleCountdownComplete} />
      )}
    </div>
  );
}

export default App;
