const { loginService } = require("../services");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const loginUser = async (req, res) => {
    try {
        const { phone_number, password } = req.body;
        const user = await loginService.login(phone_number);
        if (!user) throw new Error("User not found");

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw new Error("Invalid password");

        const payload = {
            id: user.id,
            name: user.name,
            phone_number: user.phone_number,
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRY || "1d",
        });

        return res.status(200).json({
            message: "Login successful",
            token,
        });
    } catch (err) {
        res.status(401).json({ error: err.message || "Authentication failed" });
    }
};

module.exports = {
    loginUser,
};
