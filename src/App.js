import React from "react";
import { TextArea, Input, Button } from "./components";
import useCompletes from "./useCompletes";

function App() {
  const input_ref = React.useRef(null);
// const [text, setText] = React.useState(""); --> Custom Hook으로 바꿔주기
const [text, setText] = useCompletes("");

  return (
    <div style={{
      display:"flex",
      gab:"10"
    }}>
      <div>
        <TextArea text={text}/>
      </div>
      <div>
        <Input input_ref={input_ref}/>
        <Button input_ref={input_ref} setText={setText}/>
      </div>
    </div>
  );
}

export default App;
