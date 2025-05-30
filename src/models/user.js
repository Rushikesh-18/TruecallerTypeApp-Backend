'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Contact, { foreignKey: 'user_id' });
      User.hasMany(models.GlobalContact, { foreignKey: 'added_by_user_id' });
    }
  }
  User.init({
    name:{
      type:DataTypes.STRING,
      allowNull:false
    },
    phone_number:{
      type:DataTypes.STRING,
      unique: true,
      allowNull:false
    },
    email:{
      type:DataTypes.STRING,
    }, 
    password:{
      type:DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};