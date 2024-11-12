import bcrypt from "bcrypt";

export const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

export const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};
