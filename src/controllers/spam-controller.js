const { spamService } = require("../services");

const makeSpam = async (req, res) => {
    try {
        const { phone_number, is_spam } = req.body;
        const userId = req.user.id;
        const entry = await spamService.getUserEntry(userId, phone_number);
        await spamService.updateSpamStatus(entry.id, is_spam);
        return res.status(200).json({
            message: "Spam status updated successfully.",
        });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {
    makeSpam,
};
