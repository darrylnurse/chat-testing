
import { useContext, useState, memo } from "react";
import DragWrapper, { DragWrapperContext } from "./DragWrapper";
import ComponentButton from "./ComponentButton";
import ComponentAmount from "./ComponentAmount";
imp

interface LoginProps {
  id: number
}

const Login = ({ id }:  LoginProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const { setActionTaken } = useContext(DragWrapperContext);

  const handleChange = (event : any) => {
    const { value } = event.target;
    setInputValue(value);
    setActionTaken(true)
  }

  return (
    <DragWrapper>
      <div className={"login component"}>
      <div className="submission">
        <label htmlFor={"login"}>Login!</label>
        <input
          name={"login"}
          value={inputValue}
          onChange={handleChange}
          onMouseDown={() => setActionTaken(true)}
          onMouseUp={() => setActionTaken(false)}
          autoComplete="off"
        />
      </div>
      <ComponentButton
        clickHandler={null}
        text="Submit!"
      />
      <ComponentAmount 
        type="add"
        id={id}
      />
      <ComponentAmount 
        type="remove"
        id={id}
      />
    </div>
    </DragWrapper>
  
  );
}

export default memo(Login);