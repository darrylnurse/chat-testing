import { memo, useContext } from "react";
import { DragWrapperContext } from "./DragWrapper";

interface ComponentButtonProps {
  clickHandler: ((...args: any[]) => any) | null;
  text: string;
}

const ComponentButton = ({ clickHandler, text } : ComponentButtonProps) => { 

  const { setActionTaken } = useContext(DragWrapperContext);

  const handleSubmit = () => {
    if(clickHandler) {
      clickHandler();
    }
    setActionTaken(true);
  }

  return (
    <button
      className="component-button"
      onMouseDown={handleSubmit}
      onMouseUp={() => setActionTaken(false)}
    >
      {text}
    </button>
  );
}

export default memo(ComponentButton);