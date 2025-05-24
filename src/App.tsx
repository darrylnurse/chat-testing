import Login from "./components/Login";
import DragWrapper from "./components/DragWrapper";
import PhotoCard from "./components/PhotoCard";

function App() {

  return (
    <div className="page">
      <DragWrapper>
        <Login/>
      </DragWrapper>
      <DragWrapper>
        <PhotoCard/>
      </DragWrapper>
    </div>
  )
}

export default App
