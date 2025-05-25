import { 
  type Coords,
  type Corners,
} from "../types";

export const genRandLocation = () : Coords => {
  const randPadding = 50;
  const boundX : number = window.innerWidth - randPadding;
  const boundY : number = window.innerHeight - randPadding;
  const randomX : number = Math.floor(Math.random() * boundX);
  const randomY : number = Math.floor(Math.random() * boundY);
  return {
    x: randomX,
    y: randomY,
  };
}

export const getElementCorners = (elementRef : any) : Corners => {
  const element = elementRef?.current;

  const rect = element.getBoundingClientRect();

  const { top, left, bottom, right } = rect;

  return {
    topLeft: {
      x: left,
      y: top
    },
    topRight: {
      x: right,
      y: top
    },
    bottomLeft: {
      x: left,
      y: bottom
    },
    bottomRight: {
      x: right,
      y: bottom
    }
  }
}