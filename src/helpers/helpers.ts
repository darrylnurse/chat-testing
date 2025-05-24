import { type ILocation } from "../types";


export const genRandLocation = () : ILocation => {
  const randPadding = 50;
  const boundX : number = window.innerWidth - randPadding;
  const boundY : number = window.innerHeight - randPadding;
  console.log(boundX, boundY)
  const randomX : number = Math.floor(Math.random() * boundX);
  const randomY : number = Math.floor(Math.random() * boundY);
  return {
    coordX: randomX,
    coordY: randomY,
  };
}