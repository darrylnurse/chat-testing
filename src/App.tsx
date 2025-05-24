import Login from "./components/Login";
import DragWrapper from "./components/DragWrapper";
import PhotoCard from "./components/PhotoCard";
import { createContext, useRef, useState } from "react";

type GlobalContextProps = {
  isMouseDown: boolean;
  setMouseDown: React.Dispatch<React.SetStateAction<boolean>>;
};

export const GlobalContext = createContext<GlobalContextProps>({
  isMouseDown: false,
  setMouseDown: (prev) => prev,
});

function App() {
  const [isMouseDown, setMouseDown] = useState<boolean>(false);
  const clickedElement = useRef(document.getElementById("page"));
  return (
    <div 
      id="page"
      className="page"
      onClick={(event) => clickedElement.current = event.target as HTMLDivElement}
    >
      <GlobalContext.Provider
        value={{
          isMouseDown,
          setMouseDown
        }}
      >
      <DragWrapper>
        <Login/>
      </DragWrapper>
      <DragWrapper>
        <PhotoCard/>
      </DragWrapper>
      </GlobalContext.Provider>
     
    </div>
  )
}

export default App
