const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('game_logs', {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
      },
      idActionCard: {
        type: DataTypes.STRING,
        field: 'id_action_card',
        allowNull: false,
        defaultValue: '0'
      },
      idGamesUsers: {
        type: DataTypes.INTEGER,
        field: 'id_games_users'
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at'
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at'
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('game_logs');
  },
};