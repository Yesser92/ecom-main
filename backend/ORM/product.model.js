const { DataTypes } = require('sequelize');
const sequelize = require('../ORM/index.js');
const Category = require('./category.model.js');

const Product = sequelize.define('product', {
  product_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
{
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

//Associations
Product.belongsTo(Category, { foreignKey: 'category_id' });

module.exports = Product;
