import "./App.css";
import { Button } from "./components/ui/button";

import SomeIcon from "./assets/user.svg?react";
import Logo from "./assets/Logo.svg?react";

function App() {
  console.log(SomeIcon); // Should print a React component function or class

  return (
    <>
      <div className="px-[220px] py-[16px] flex justify-between">
      <Logo/>
      
      </div>

      <Button left={true} right={true} variant="default" icon={<SomeIcon />}>
        default
      </Button>
    </>
  );
}

export default App;
