const { Logger } = require("../config");
class crudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      Logger.error("Error details:", error);
    }
  }
  async createAll(data) {
    try {
      const response = await this.model.bulkCreate(data);
      return response;
    } catch (error) {
      Logger.error("Error details:", error);
    }
  }
  async destroy(data) {
    try {
      const response = await this.model.destroy({
        where: {
          id: data,
        },
      });
      return response;
    } catch (error) {
      Logger.error("Something went wrong in crud repo: destroy");
      throw error;
    }
  }

  async getAll() {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (error) {
      Logger.error("Something went wrong in crud repo: getAll");
      throw error;
    }
  }
  async get(data) {
    try {
      const response = await this.model.findOne(data);
      return response;
    } catch (error) {
      Logger.error("Something went wrong in crud repo: get");
      throw error;
    }
  }

  async update({ where, data }) {
    try {
      const response = await this.model.update(data, {
        where,
      });
      return response;
    } catch (error) {
      Logger.error("Something went wrong in crud repo: update");
      throw error;
    }
  }
}

module.exports = crudRepository;
