import { memo } from "react";
import ComponentButton from "./ComponentButton";
import DragWrapper from "./DragWrapper";
const BASE_URL = import.meta.env.BASE_URL;

const PhotoCard = () => {
  return (
    <DragWrapper>
      <div 
        className="photo-card component"
        key={"photo-card"}
      >
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
    </DragWrapper>
  )
}

export default memo(PhotoCard)