import "./App.css";
import { Button } from "./components/ui/button";

import SomeIcon from "./assets/user.svg?react";

function App() {
  console.log(SomeIcon); // Should print a React component function or class

  return (
    <>
      <h1 className="mb-5"> shadcn/UI</h1>
      <div className="mb-5"></div>

      {/* <Button variant='default' icon= {someIconUrl}>default</Button>
       <Button variant='destructive' icon= {someIconUrl}>destructive</Button>
       <Button variant='outline' icon={reactIcon}>outline</Button>
       <Button variant='ghost' icon= {someIconUrl}>ghost</Button> */}

      <Button variant="link" icon={<SomeIcon />}>
        link
      </Button>
    </>
  );
}

export default App;
