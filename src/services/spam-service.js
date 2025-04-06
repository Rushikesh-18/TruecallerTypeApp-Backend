const { globalRepository } = require("../repositories");
const GlobalRepository = new globalRepository();

const getUserEntry = async (userId, phoneNumber) => {
  const entry = await GlobalRepository.findUserContact(userId, phoneNumber);
  if (!entry) {
    throw new Error("You can only mark your own contacts as spam.");
  }
  return entry;
};

const updateSpamStatus = async (entryId, is_spam) => {
  try {
    const updated = await GlobalRepository.update({
      where: { id: entryId },
      data: { is_spam },
    });
    return updated;
  } catch (error) {
    console.error("Error updating spam status:", error);
    throw error;
  }
};

module.exports = {
  getUserEntry,
  updateSpamStatus,
};
