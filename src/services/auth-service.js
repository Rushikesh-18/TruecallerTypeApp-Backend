const { authRepository } = require("../repositories");

const AuthRepository = new authRepository();

const createUser = async (data) => {
  try {
    const user = await AuthRepository.create(data);
    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error; // Let controller handle error response
  }
};

const getUser = async (phone_number) => {
  try {
    const user = await AuthRepository.findByPhoneNumber(phone_number);
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

module.exports = {
  createUser,
  getUser,
};
