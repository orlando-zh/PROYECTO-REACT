import axios from "axios";

const API_URL = "http://localhost:5000/api/baristas";

export const getBaristas = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (err) {
    console.error("Error fetching baristas:", err);
    throw err;
  }
};
