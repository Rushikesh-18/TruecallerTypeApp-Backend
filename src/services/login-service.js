const { authRepository } = require("../repositories");

const AuthRepository = new authRepository();

const login = async (phone_number) => {
  try {
    const user = await AuthRepository.findByPhoneNumber(phone_number);
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

module.exports = {
  login,
};
