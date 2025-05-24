import { memo } from "react";
import ComponentButton from "./ComponentButton";
const BASE_URL = import.meta.env.BASE_URL;

const PhotoCard = () => {

  console.log(BASE_URL)
  return (
    <div className="photo-card component">
      <img
        src={BASE_URL + "daro.jpg"}
        alt="photo-card-image"
        draggable="false"
      />
      <div>Do you like this photo?</div>
      <div className="photo-opinion">
        <ComponentButton
          clickHandler={null}
          text="Yes"
        />
        <ComponentButton
          clickHandler={null}
          text="No"
        />
      </div>
    </div>
  )
}

export default memo(PhotoCard)