module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define(
    "Produto",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(100),
      },
      description: {
        type: DataTypes.STRING(100),
      },
      type: {
        type: DataTypes.STRING(100),
      },
      price: {
        type: DataTypes.FLOAT,
      },
      link: {
        type: DataTypes.STRING,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "produtos",
    }
  );

  return Produto;
};
