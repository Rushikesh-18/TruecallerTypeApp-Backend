const { contactRepository } = require("../repositories");

const ContactRepository = new contactRepository();

const createUser = async (data) => {
  try {
    const user = await ContactRepository.create(data);
    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error; 
  }
};

const getUser = async (phone_number) => {
  try {
    const user = await ContactRepository.get(phone_number);
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};
const getAllUser = async (user_id) => {
  try {
    const users = await ContactRepository.getAllUser(user_id);
    return users;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

module.exports = {
  createUser,
  getUser,
  getAllUser,
};
