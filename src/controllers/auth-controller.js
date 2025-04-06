// const { User } = require("../models");

// Registration and Profile
const { authService, globalService, contactService } = require("../services");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
    const { name, phone_number, email, password } = req.body;

    try {
        const existingUser = await authService.getUser(phone_number);
        if (existingUser) {
            return res.status(400).json({ error: "Phone number already registered." });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await authService.createUser({
            name,
            phone_number,
            email,
            password: hashedPassword
        });
        await globalService.createUser({
            phone_number: phone_number,
            name: name,
            added_by_user_id: newUser.id,
            is_spam: false
        });

        const userContacts = await contactService.getAllUser(newUser.id);
        console.log(userContacts);
        const globalContactData = userContacts.map(contact => ({
            phone_number: contact.phone_number,
            name: contact.name,
            added_by_user_id: newUser.id,
            is_spam: false
        }));

        if (globalContactData.length > 0) {
            await globalService.createAllUser(globalContactData);
        }

        return res.status(201).json({ message: "User registered successfully." });

    } catch (err) {
        console.error("Registration error:", err);
        return res.status(500).json({ error: "Server error" });
    }
};

module.exports = {
    registerUser
};
