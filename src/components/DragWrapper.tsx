import { 
  useState, 
  type ReactNode, 
  useEffect, 
  useRef,
  createContext,
  useMemo
 } from "react";

interface DragWrapperProps {
  children: ReactNode;
}

interface Coords {
  x: number;
  y: number;
}

type DragWrapperContextProps = {
  actionTaken: boolean;
  setActionTaken: React.Dispatch<React.SetStateAction<boolean>>;
};

export const DragWrapperContext = createContext<DragWrapperContextProps>({
  actionTaken: false,
  setActionTaken: (prev) => prev,
});

const DragWrapper = ({ children } : DragWrapperProps) => {
  const defaultPosition = useRef<Coords>({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
  });
  const [isMouseDown, setMouseDown] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<Coords>({ x: 0, y: 0 });
  const [lastMousePosition, setLastMousePosition] = useState<Coords>(defaultPosition.current);
  const [actionTaken, setActionTaken] = useState<boolean>(false);
  const dragRef = useRef(null);
  const [wrapperOffset, setWrapperOffset] = useState<Coords>({ x: 0, y: 0 });

  useEffect(() => {
    if (dragRef.current) {
      setWrapperOffset({
        x: dragRef?.current?.offsetWidth / 2,
        y: dragRef?.current?.offsetHeight / 2
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
  }

  const wrapperPosition : Coords = useMemo(()  => {
    console.log(actionTaken)
    if(!actionTaken && isMouseDown) {
      return {
        x: mousePosition.x - wrapperOffset.x,
        y: mousePosition.y - wrapperOffset.y
      }
    }
    return {
      x: lastMousePosition.x - wrapperOffset.x,
      y: lastMousePosition.y - wrapperOffset.y
    }
  }, [mousePosition, actionTaken, isMouseDown])

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
        value={{actionTaken, setActionTaken}}
      >
        {children}
      </DragWrapperContext.Provider>
      
    </div>
  );
}

export default DragWrapper;