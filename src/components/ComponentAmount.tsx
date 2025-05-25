import { useContext } from "react";
import { GlobalContext } from "../App";
import { DragWrapperContext } from "./DragWrapper";

interface ComponentAmountProps {
  type: "add" | "remove";
  id: number;
}

const ComponentAmount = ({ type, id } : ComponentAmountProps) => {

  const isAdd : boolean = type === "add";

  const {setComponentList} = useContext(GlobalContext);
  const {setActionTaken} = useContext(DragWrapperContext);

  const duplicateComponent = () => {
    setComponentList((prev) => [...prev, prev.length]);
  };

  const deleteComponent = (id : number) => {
    setComponentList((prev) => [
      ...prev.filter((num) => num !== id)
    ]);
  };

  const handleClick = () => {
    setActionTaken(true);
    if (isAdd) {
      duplicateComponent();
      return;
    }
    deleteComponent(id);
  }

  return (
    <div 
      className={isAdd ? "add-button" : "remove-button"}
      onMouseDown={handleClick}
      onMouseUp={() => setActionTaken(false)}
    >
      {"+"}
    </div>
  );
}

export default ComponentAmount;