import { useState } from "react";
import {
  HiOutlineClipboardCopy,
  HiOutlineClipboardCheck,
} from "react-icons/hi";
import toast from "react-hot-toast";

export default function CopyToClipboard({ anim }) {
  const [copied, setCopied] = useState(false);
  return (
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
  );
}
