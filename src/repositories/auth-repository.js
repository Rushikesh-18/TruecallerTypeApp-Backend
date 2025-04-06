const crudRepository = require("./crud-repository");
const { User } = require("../models");

class authRepository extends crudRepository {
  constructor() {
    super(User);
  }
  async findByPhoneNumber(phone_number) {
    try {
      const response = await User.findOne({ where: { phone_number } });
      return response;
    } catch (error) {
      Logger.error("Something went wrong in finding phone: getAllUser");
      throw error;
    }
  }
}

module.exports = authRepository;
