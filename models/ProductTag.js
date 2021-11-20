const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define an id column
    id: {
      type: DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement: true
    },
     //define product_id column that store a reference of the id of product model
    product_id: {
      type: DataTypes.INTEGER,
      references: { //this reference the product model , set in Product.js
        model: 'product',
        key: 'id' //foreign key id
      },
    },
     //define tag_id column that store a reference of the id of tag model
    tag_id: {
      type: DataTypes.INTEGER,
      references: { //this reference the tag model , set in Tag.js
        model: 'tag',
        key: 'id' //foreign key id
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
