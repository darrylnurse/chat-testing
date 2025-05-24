
import { useContext, useState, memo } from "react";
import { DragWrapperContext } from "./DragWrapper";
import ComponentButton from "./ComponentButton";

const Login = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const { setActionTaken } = useContext(DragWrapperContext);

  const handleChange = (event : any) => {
    const { value } = event.target;
    setInputValue(value);
    setActionTaken(true);
  }


  return (
    <div className={"login component"}>
      <div className="submission">
        <label htmlFor={"login"}>Login!</label>
        <input
          name={"login"}
          value={inputValue}
          onMouseDown={handleChange}
          onMouseUp={() => setActionTaken(false)}
        />
      </div>
      <ComponentButton
        clickHandler={null}
        text="Submit!"
      />
    </div>
  );
}

export default memo(Login);