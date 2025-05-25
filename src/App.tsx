import Login from "./components/Login";
import PhotoCard from "./components/PhotoCard";
import { createContext, useState } from "react";

interface GlobalContextProps {
  componentList: number[],
  setComponentList: React.Dispatch<React.SetStateAction<number[]>>,
}

export const GlobalContext = createContext<GlobalContextProps>({
  componentList: [0],
  setComponentList: (prev) => prev,
})

function App() {

 const [componentList, setComponentList] = useState([0]);

  return (
    <div 
      id="page"
      className="page"
    >
      <GlobalContext.Provider
        value={{
          componentList,
          setComponentList
        }}
      >
        {componentList.map((id) => (
          <Login 
            key={id}
            id={id}
          />
        ))}
      <PhotoCard/>
      </GlobalContext.Provider>
    </div>
  )
}

export default App
