import { 
  useState, 
  type ReactNode, 
  useEffect, 
  useRef,
  createContext,
  useMemo,
  memo,
 } from "react";
 import { type Coords } from "../types";
import { genRandLocation, getElementCorners } from "../helpers/helpers";

interface DragWrapperProps {
  children: ReactNode;
}

type DragWrapperContextProps = {
  actionTaken: boolean;
  setActionTaken: React.Dispatch<React.SetStateAction<boolean>>;
  wrapperPosition: Coords
};

export const DragWrapperContext = createContext<DragWrapperContextProps>({
  actionTaken: false,
  setActionTaken: (prev) => prev,
  wrapperPosition: { x: 0, y: 0 },
});

const DragWrapper = ({ children } : DragWrapperProps) => {
  const defaultPosition = useRef<Coords>(genRandLocation());
  const [isMouseDown, setMouseDown] = useState<boolean>(false);
  const [firstDrag, setFirstDrag] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<Coords>({ x: 0, y: 0 });
  const [actionTaken, setActionTaken] = useState<boolean>(false);
  const dragRef = useRef(null);
  const [wrapperOffset, setWrapperOffset] = useState<Coords>({ x: 0, y: 0 });
  const [lastMousePosition, setLastMousePosition] = useState<Coords>({
    x: defaultPosition.current.x,
    y: defaultPosition.current.y,
  });

  useEffect(() => {
    if (dragRef.current) {
      setWrapperOffset({
        x: dragRef?.current["offsetWidth"] / 2,
        y: dragRef?.current["offsetHeight"] / 2
      });
    }

    const updateMousePosition = (event : any) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  const handleMouseUp = () => {
    setMouseDown(false);
    if (!actionTaken) {
      setLastMousePosition(mousePosition);
    }
  }

  const handleMouseDown = () => {
    setMouseDown(true);
    setFirstDrag(true);
  }

  const wrapperPosition : Coords = useMemo(()  => {
    if(!actionTaken && isMouseDown) {
      return {
        x: mousePosition.x - wrapperOffset.x,
        y: mousePosition.y - wrapperOffset.y
      }
    }
    if(firstDrag) {
      return {
      x: lastMousePosition.x - wrapperOffset.x,
      y: lastMousePosition.y - wrapperOffset.y
    }
    }
    return {
      x: lastMousePosition.x,
      y: lastMousePosition.y
    }
    
  }, [mousePosition, actionTaken, isMouseDown]);

  useEffect(() => {
    if(dragRef.current) {
      console.log(getElementCorners(dragRef))
      console.log(children?.key)
    }
  }, [isMouseDown])

  return (
    <div
      ref={dragRef}
      className={isMouseDown ? "drag-wrapper selected" : "drag-wrapper"}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp} 
      style={{
        transform: `translate(
          ${wrapperPosition.x}px, 
          ${wrapperPosition.y}px
        )`,
        transition: "transform 0.025s ease-in"
      }}
    >
      <DragWrapperContext.Provider
        value={{
          actionTaken,
          setActionTaken,
          wrapperPosition,
        }}
      >
        {children}
      </DragWrapperContext.Provider>
      
    </div>
  );
}

export default memo(DragWrapper);