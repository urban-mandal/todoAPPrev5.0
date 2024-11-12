import axios from "axios";

const addUser = async (email, password, name) => {
  try {
    console.log("Making request to Flask with:", { email, name });

    const response = await axios.post(
      "http://localhost:5001/add-user",
      { email, password, name },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Flask response:", response.data);
    return response.data;
  } catch (error) {
    console.error("AddUser service error:", {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
    });
    throw new Error(`Failed to add user: ${error.message}`);
  }
};

export { addUser };
