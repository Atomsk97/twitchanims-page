import axios from "axios";

export const getAnimsRequests = async () => {
  return await axios.get("/anims");
};

export const getAnimRequests = async (id) => {
  return await axios.get("/anims/" + id);
};