const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Employee = sequelize.define('Employee', {
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  jobTitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  primaryEmergencyContact: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  primaryEmergencyContactPhone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  primaryEmergencyContactRelationship: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  secondaryEmergencyContact: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  secondaryEmergencyContactPhone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  secondaryEmergencyContactRelationship: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  createdAt: 'created_at', 
  updatedAt: 'updated_at', 
});

module.exports = Employee;
