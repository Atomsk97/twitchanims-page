import { useState, useContext, useEffect } from "react";
import { getAnimsRequests, getAnimRequests } from "../api/anims.api.js";

import { AnimContext } from "./AnimContext";

export const useAnims = () => {
  const context = useContext(AnimContext);
  if (!context) {
    throw new Error("useAnims must be used within a AnimProvider");
  }
  return context;
};

export const AnimProvider = ({ children }) => {
  const [anims, setAnims] = useState([]);

  async function getAnims() {
    const response = await getAnimsRequests();
    setAnims(response.data);
  }

  useEffect(() => {
    getAnims();
  }, []);

  const getAnim = async (id) => {
    const response = await getAnimRequests(id);
    return response.data;
  };

  return (
    <AnimContext.Provider
      value={{
        anims,
        getAnims,
        getAnim,
      }}
    >
      {children}
    </AnimContext.Provider>
  );
};
