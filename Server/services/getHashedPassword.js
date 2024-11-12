import axios from "axios";

const getHashedPassword = async (email) => {
  try {
    const response = await axios.post(
      "http://localhost:5001/get-hashed-password",
      { email }
    );
    return response.data;
  } catch (error) {
    // Simplified error logging
    console.error("GetHashedPassword error:", {
      status: error.response?.status,
      data: error.response?.data,
    });
    throw new Error(error.response?.data || "Failed to get hashed password");
  }
};

export default getHashedPassword;
