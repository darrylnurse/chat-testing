import Login from "./components/Login";
import PhotoCard from "./components/PhotoCard";
import { useState, type ReactNode} from "react";

function App() {

 const [componentList, setComponentList] = useState([0]);

  const duplicateComponent = () => {
    setComponentList((prev) => [...prev, prev.length]);
  };

  const deleteComponent = (id : number) => {
    setComponentList((prev) => [
      ...prev.filter((num) => num !== id)
    ]);
  };

  return (
    <div 
      id="page"
      className="page"
    >
      {componentList.map((id) => (
        <Login 
          key={id}
          additionHandler={duplicateComponent}
          removalHandler={() => deleteComponent(id)}
        />
      ))}
      <PhotoCard/>
    </div>
  )
}

export default App
