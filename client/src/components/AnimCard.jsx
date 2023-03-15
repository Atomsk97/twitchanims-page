import { useState } from "react";
import MediaPlayer from "./MediaPlayer";
import {
  HiOutlineClipboardCopy,
  HiOutlineClipboardCheck,
} from "react-icons/hi";

import toast, { Toaster } from "react-hot-toast";

export default function AnimCard({ anim }) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="bg-zinc-800 text-white rounded-sm shadow-md shadow-black w-[360] h-[540]">
      {/* Informacion */}
      <div className="px-4 py-7">
        <div className="flex justify-between">
          <h3 className="text-lg">{anim.title}</h3>
          <div
            onClick={() => {
              if (!copied) {
                navigator.clipboard.writeText(anim.description);
                setCopied(true);
                toast.success("Copiado al portapapeles");
                setTimeout(() => {
                  setCopied(false);
                }, 3000);
              }
            }}
            className={
              copied
                ? "text-slate-100 hover:text-slate-100 hover:cursor-pointer text-2xl py-1 h-fit"
                : "text-slate-400 hover:text-slate-100 hover:cursor-pointer text-2xl py-1 h-fit"
            }
          >
            {copied ? <HiOutlineClipboardCheck /> : <HiOutlineClipboardCopy />}
          </div>
        </div>
        <p className="text-sm">{anim.description}</p>
      </div>
      {/* Reproductor */}
      <div className="flex justify-center">
        {anim.media && (
          <MediaPlayer
            type={anim.media.fileType}
            public_id={anim.media.public_id}
          />
        )}
      </div>
      <Toaster />
    </div>
  );
}
