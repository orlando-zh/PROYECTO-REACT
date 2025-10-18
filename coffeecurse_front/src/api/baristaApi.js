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

export const postBaristas = async (newBarista) => {
    try {
        const res = await axios.post(API_URL, newBarista); // enviamos el objeto al backend
        return res.data;
    } catch (err) {
        console.error("Error creando barista:", err);
        throw err;
    }
};
