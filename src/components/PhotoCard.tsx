import { memo } from "react";
import ComponentButton from "./ComponentButton";

const PhotoCard = () => {

  return (
    <div className="photo-card component">
      <img 
        src=""
        alt="photo-card-image"
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