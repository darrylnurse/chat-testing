
import { useContext, useState, memo } from "react";
import DragWrapper, { DragWrapperContext } from "./DragWrapper";
import ComponentButton from "./ComponentButton";

interface LoginProps {
  additionHandler: (...args : any[]) => any
  removalHandler: (...args : any[]) => any
}

const Login = ({ additionHandler, removalHandler }:  LoginProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const { setActionTaken } = useContext(DragWrapperContext);

  const handleChange = (event : any) => {
    const { value } = event.target;
    setInputValue(value);
  }

  const handleAdd = () => {
    setActionTaken(true);
    additionHandler();
  }

  const handleRemove = () => {
    setActionTaken(true);
    removalHandler();
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
      <div 
        className="add-button"
        onMouseDown={handleAdd}
        onMouseUp={() => setActionTaken(false)}
      >
        {"+"}
      </div>
      <div 
        className="remove-button"
        onMouseDown={handleRemove}
        onMouseUp={() => setActionTaken(false)}
      >
        {"+"}
      </div>
    </div>
    </DragWrapper>
  
  );
}

export default memo(Login);