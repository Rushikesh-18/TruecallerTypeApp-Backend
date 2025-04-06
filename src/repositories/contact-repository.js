const crudRepository = require("./crud-repository");
const { Contact } = require("../models");
const { where } = require("sequelize");

class contactRepository extends crudRepository {
  constructor() {
    super(Contact);
  }
  async getAllUser(user_id) {
    try {
      const response = await Contact.findAll({ where: { user_id } });

      return response;
    } catch (error) {
      Logger.error("Something went wrong in crud repo: getAllUser");
      throw error;
    }
  }
}

module.exports = contactRepository;
