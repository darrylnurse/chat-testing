import { type Coords } from "../types";

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