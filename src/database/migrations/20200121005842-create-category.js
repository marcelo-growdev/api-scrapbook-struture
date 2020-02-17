module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('categories', {
      uid: {
        type: Sequelize.UUID,
        allowNUll: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNUll: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNUll: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNUll: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('categories');
  },
};
