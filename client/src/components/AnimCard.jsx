import MediaPlayer from "./MediaPlayer";
import { Toaster } from "react-hot-toast";
import CopyToClipboard from "./CopyToClipboard";

export default function AnimCard({ anim }) {
  return (
    <div className="bg-zinc-800 text-white rounded-sm shadow-md shadow-black w-[360] h-[540]">
      {/* Informacion */}
      <div className="px-4 py-7">
        <div className="flex justify-between">
          <h3 className="text-lg">{anim.title}</h3>
          <CopyToClipboard anim={anim} />
        </div>
        <p className="text-sm">{anim.description}</p>
      </div>
      {/* Reproductor */}
      {anim.media && (
        <MediaPlayer
          type={anim.media.fileType}
          public_id={anim.media.public_id}
        />
      )}
      <Toaster />
    </div>
  );
}
