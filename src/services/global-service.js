const { globalRepository } = require("../repositories");

const GlobalRepository = new globalRepository();

const createUser = async (data) => {
  try {
    const user = await GlobalRepository.create(data);
    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error; // Let controller handle error response
  }
};
const createAllUser = async (data) => {
  try {
    const user = await GlobalRepository.createAll(data);
    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error; 
  }
};
const getUser = async (phone_number) => {
  try {
    const user = await GlobalRepository.get(phone_number);
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

module.exports = {
  createUser,
  createAllUser,
  getUser,
};
