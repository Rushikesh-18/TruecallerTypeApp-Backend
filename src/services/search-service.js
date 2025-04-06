const { globalRepository } = require("../repositories");
const GlobalRepository = new globalRepository();

const searchByName = async (query) => {
  const startsWith = await GlobalRepository.findByNameStart(query);
  const contains = await GlobalRepository.findByNameContain(query);

  const uniqueMap = new Map();

  [...startsWith, ...contains].forEach((entry) => {
    const key = entry.phone_number + entry.name;
    if (!uniqueMap.has(key)) {
      uniqueMap.set(key, entry); // No transformation!
    }
  });

  return Array.from(uniqueMap.values());
};

const searchByNumber = async (phone_number) => {
  return await GlobalRepository.findByPhoneNumber(phone_number);
};

module.exports = {
  searchByName,
  searchByNumber,
};
