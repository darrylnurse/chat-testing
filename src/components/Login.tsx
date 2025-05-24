import { useContext, useState } from "react";
import { DragWrapperContext } from "./DragWrapper";

const Login = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const { setActionTaken } = useContext(DragWrapperContext);

  const handleChange = (event : any) => {
    const { value } = event.target;
    setInputValue(value);
    setActionTaken(true);
  }

  const handleSubmit = () => {
    setActionTaken(true);
  }

  return (
    <div className={"login click component"}>
      <div className="submission">
        <label htmlFor={"login"}>Login!</label>
        <input
          name={"login"}
          value={inputValue}
          onMouseDown={handleChange}
          onMouseUp={() => setActionTaken(false)}
        />
      </div>
      <button 
        className="click"
        type="button"
        onMouseDown={handleSubmit}
        onMouseUp={() => setActionTaken(false)}
      >
        Submit!
      </button>
    </div>
  );
}

export default Login;