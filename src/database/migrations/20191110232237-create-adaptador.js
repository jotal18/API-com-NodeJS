
module.exports = {
  up: (sequelize, Sequelize) => {
    return sequelize.createTable('adaptador', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome: {
          type: Sequelize.STRING,
          allowNull: false
      },
      matricula: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      setor: {
          type: Sequelize.STRING,
          allowNull: false
      },
      data: {
          type: Sequelize.DATEONLY,
          allowNull: true
      },
      observacao: {
          type: Sequelize.STRING,
          allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
  }, {
      freezeTableName: true
  })
  },

  down: (sequelize) => {
    return sequelize.dropTable('adaptador')
  }
};
