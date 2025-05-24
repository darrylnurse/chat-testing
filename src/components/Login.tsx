import { useState, memo } from "react";

const Login = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (event : any) => {
    const { value } = event.target;
    setInputValue(value);
  }

  return (
    <div className={"login click component"}>
      <div className="submission">
        <label htmlFor={"login"}>Login!</label>
        <input
          name={"login"}
          value={inputValue}
          onChange={handleChange}
        />
      </div>
      <button 
        className="click"
        type="button"
      >
        Submit!
      </button>
    </div>
  );
}

export default memo(Login);