const crudRepository = require("./crud-repository");
const { GlobalContact, User } = require("../models");
const { Op } = require("sequelize");

class GlobalRepository extends crudRepository {
  constructor() {
    super(GlobalContact);
  }

  async findUserContact(added_by_user_id, phone_number) {
    try {
      return await GlobalContact.findOne({
        where: { added_by_user_id, phone_number },
      });
    } catch (error) {
      throw error;
    }
  }

  async findByPhoneNumber(phone_number) {
    try {
      const registeredUser = await User.findOne({ where: { phone_number } });

      if (registeredUser) {
        return [
          {
            name: registeredUser.name,
            phone_number: registeredUser.phone_number,
            email: registeredUser.email,
            spam_likelihood: await this.getSpamLikelihood(phone_number),
          },
        ];
      } else {
        const contacts = await GlobalContact.findAll({
          where: { phone_number },
        });
        return await this.enrichWithSpamStats(contacts);
      }
    } catch (error) {
      throw error;
    }
  }

  async getSpamLikelihood(phone_number) {
    const [total, spam] = await Promise.all([
      GlobalContact.count({ where: { phone_number } }),
      GlobalContact.count({ where: { phone_number, is_spam: 1 } }), // MySQL uses 1 for true
    ]);

    return total === 0 ? "0%" : `${Math.round((spam / total) * 100)}%`;
  }

  async enrichWithSpamStats(contacts) {
    const enriched = [];

    for (const contact of contacts) {
      const phone = contact.phone_number;
      const likelihood = await this.getSpamLikelihood(phone);

      enriched.push({
        name: contact.name,
        phone_number: contact.phone_number,
        spam_likelihood: likelihood,
      });
    }

    return enriched;
  }

  async findByNameStart(query) {
    try {
      const contacts = await GlobalContact.findAll({
        where: {
          name: {
            [Op.like]: `${query}%`,
          },
        },
      });
      return await this.enrichWithSpamStats(contacts);
    } catch (error) {
      throw error;
    }
  }

  async findByNameContain(query) {
    try {
      const contacts = await GlobalContact.findAll({
        where: {
          name: {
            [Op.like]: `%${query}%`,
          },
          [Op.not]: {
            name: {
              [Op.like]: `${query}%`,
            },
          },
        },
      });
      return await this.enrichWithSpamStats(contacts);
    } catch (error) {
      throw error;
    }
  }

  async enrichWithSpamStats(contacts) {
    const enriched = [];

    for (const contact of contacts) {
      const phone = contact.phone_number;

      const [total, spam] = await Promise.all([
        GlobalContact.count({ where: { phone_number: phone } }),
        GlobalContact.count({ where: { phone_number: phone, is_spam: 1 } }), // 1 = true in MySQL
      ]);

      const likelihood =
        total === 0 ? "0%" : `${Math.round((spam / total) * 100)}%`;

      enriched.push({
        name: contact.name,
        phone_number: contact.phone_number,
        spam_likelihood: likelihood,
      });
    }

    return enriched;
  }
}

module.exports = GlobalRepository;
