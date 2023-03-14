import { useAnims } from "../context/AnimProvider";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import AnimCard from "../components/AnimCard";

export function HomePage() {
  const { anims } = useAnims();

  if (anims.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center text-white">
        <AiOutlineLoading3Quarters className="w-48 h-48 animate-spin mb-4" />
        <h1 className="text-2xl">
          Espere un momento mientras carga las animaciones...
        </h1>
      </div>
    );
  }

  return (
    <div className="text-white mb-4">
      <header className="flex justify-between py-4">
        <h1>{`Animaciones (${anims.length})`}</h1>
      </header>

      <div className="grid grid-cols-4 gap-2">
        {anims.map((anim) => (
          <AnimCard anim={anim} key={anim._id} />
        ))}
      </div>
    </div>
  );
}
