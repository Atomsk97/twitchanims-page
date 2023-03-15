import { AdvancedImage, AdvancedVideo } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fit, fillPad } from "@cloudinary/url-gen/actions/resize";
import { ar16X9 } from "@cloudinary/url-gen/qualifiers/aspectRatio";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";

export default function MediaPlayer({ type, public_id }) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "atomskmediacloud",
    },
  });

  let myFile;
  let isImg = true;

  if (type === "image") {
    myFile = cld.image(public_id);
  } else if (type === "video" || type === "audio") {
    myFile = cld.video(public_id);
    isImg = false;
  }

  myFile.resize(fit().height(540));
  myFile.resize(fillPad().height(540).aspectRatio(ar16X9()).gravity(autoGravity()));

  return (
    <div className="flex justify-center max-h-96">
      {isImg ? (
        <AdvancedImage cldImg={myFile} />
      ) : (
        <AdvancedVideo cldVid={myFile} controls />
      )}
    </div>
  );
}
