"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const contacts = [
      { user_id: 1, name: "Amit Sharma", phone_number: "9876543210" },
      { user_id: 1, name: "Priya Mehta", phone_number: "9123456789" },
      { user_id: 1, name: "Rohit Verma", phone_number: "9988776655" },
      {
        user_id: 1,
        name: "Kavita office XB(Oper)",
        phone_number: "9845098450",
      },
      { user_id: 1, name: "Ankit Jain", phone_number: "9812345678" },
      { user_id: 2, name: "Kavita Singh", phone_number: "9845098450" },
      { user_id: 2, name: "Ankit office XB(QA)", phone_number: "9812345678" },
      { user_id: 2, name: "Sonal Patil", phone_number: "9000090000" },
      { user_id: 2, name: "Deepak Nair", phone_number: "9898989898" },
      { user_id: 2, name: "Divya Kapoor", phone_number: "9797979797" },
      { user_id: 3, name: "Manish Joshi", phone_number: "9887766554" },
      { user_id: 3, name: "Ritika Desai", phone_number: "9876076543" },
      { user_id: 3, name: "Kiran Rao", phone_number: "9765432100" },
      { user_id: 3, name: "Suresh Kumar", phone_number: "9900001122" },
      { user_id: 3, name: "Meena Das", phone_number: "9966332211" },
      { user_id: 4, name: "Amit Sharma XB", phone_number: "9876543210" },
      { user_id: 4, name: "Gaurav XB Finance", phone_number: "9012341234" },
      { user_id: 4, name: "Yogesh Tiwari", phone_number: "9871112223" },
      { user_id: 4, name: "Pooja Bhatt", phone_number: "9760000000" },
      { user_id: 4, name: "Vikas Chauhan", phone_number: "9811112233" },
      { user_id: 5, name: "Ishita Ghosh", phone_number: "9777888999" },
      { user_id: 5, name: "Nikhil Dey", phone_number: "9955664433" },
      { user_id: 5, name: "Sonal XB-Devops", phone_number: "9000090000" },
      { user_id: 5, name: "Ritika XB-Java", phone_number: "9876076543" },
      { user_id: 5, name: "Priya office XB", phone_number: "9123456789" },
      { user_id: 1, name: "Payal Sinha", phone_number: "9123123123" },
      { user_id: 2, name: "Chirag Patel", phone_number: "9019019019" },
      { user_id: 3, name: "Lavanya R", phone_number: "9345634563" },
      { user_id: 4, name: "Harshad Joshi", phone_number: "9234567890" },
      { user_id: 5, name: "Gaurav Mittal", phone_number: "9012341234" },
      { user_id: 6, name: "Ravi Shankar", phone_number: "9001112222" },
      { user_id: 6, name: "Meena XB Ops", phone_number: "9012341234" },
      { user_id: 6, name: "Kiran HR", phone_number: "9845098450" },
      { user_id: 7, name: "Gaurav Mittal (QA)", phone_number: "9012341234" },
      { user_id: 7, name: "Lavanya Office", phone_number: "9345634563" },
      { user_id: 7, name: "Rohit Sharma", phone_number: "9777888999" },
      { user_id: 8, name: "Amit Sir", phone_number: "9876543210" },
      { user_id: 8, name: "Sonal HR", phone_number: "9000090000" },
      { user_id: 8, name: "Ankit XB Manager", phone_number: "9812345678" },
      { user_id: 9, name: "Priya Mehta", phone_number: "9123456789" },
      { user_id: 9, name: "Priya - Work", phone_number: "9123456789" },
      { user_id: 9, name: "Nikhil Dey", phone_number: "9955664433" },
      { user_id: 10, name: "Deepak (Finance)", phone_number: "9898989898" },
      { user_id: 10, name: "Yogesh Tiwari", phone_number: "9871112223" },
      { user_id: 10, name: "Gaurav (XB)", phone_number: "9012341234" },
      { user_id: 11, name: "Chirag Patel", phone_number: "9019019019" },
      { user_id: 11, name: "Harshad Dev", phone_number: "9234567890" },
      { user_id: 11, name: "Ankit Jain", phone_number: "9812345678" },
      { user_id: 12, name: "Payal Sinha", phone_number: "9123123123" },
      { user_id: 12, name: "Manish QA", phone_number: "9887766554" },
      { user_id: 12, name: "Ritika JAVA", phone_number: "9876076543" },
      { user_id: 13, name: "Lavanya R", phone_number: "9345634563" },
      { user_id: 13, name: "Pooja Bhatt", phone_number: "9760000000" },
      { user_id: 13, name: "Meena Das", phone_number: "9966332211" },
      { user_id: 14, name: "Ritika DevOps", phone_number: "9876076543" },
      { user_id: 14, name: "Sonal DevOps", phone_number: "9000090000" },
      { user_id: 14, name: "Divya Kapoor", phone_number: "9797979797" },
      { user_id: 15, name: "Ravi Ops XB", phone_number: "9001112222" },
      { user_id: 15, name: "Kavita Reddy", phone_number: "9845098450" },
      { user_id: 15, name: "Suresh Kumar", phone_number: "9900001122" },
      { user_id: 16, name: "Ankit Dev", phone_number: "9812345678" },
      { user_id: 16, name: "Priya Work", phone_number: "9123456789" },
    ];

    const timeStamp = new Date();

    await queryInterface.bulkInsert(
      "Contacts",
      contacts.map((c) => ({
        ...c,
        createdAt: timeStamp,
        updatedAt: timeStamp,
      })),
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Contacts", null, {});
  },
};
