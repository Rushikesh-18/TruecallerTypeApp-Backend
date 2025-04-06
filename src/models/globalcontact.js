'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GlobalContact extends Model {
    static associate(models) {
      GlobalContact.belongsTo(models.User, { foreignKey: 'added_by_user_id', as: 'addedBy' });
    }
  }
  GlobalContact.init({
    phone_number:{
      type:DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    added_by_user_id:{
      type:DataTypes.INTEGER,
    },
    is_spam:{
      type:DataTypes.BOOLEAN,
    },
  }, {
    sequelize,
    modelName: 'GlobalContact',
  });
  return GlobalContact;
};