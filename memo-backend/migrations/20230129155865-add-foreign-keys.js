const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('scores', {
      fields: ['id_games_users'],
      type: 'foreign key',
      name: 'scores_id_games_users_fkey',
      references: {
        table: 'games_users',
        field: 'id'
      }
    })

    await queryInterface.addConstraint('game_logs', {
      fields: ['id_games_users'],
      type: 'foreign key',
      name: 'game_logs_id_games_users_fkey',
      references: {
        table: 'games_users',
        field: 'id'
      }
    })

    
    await queryInterface.addConstraint('games_users', {
      fields: ['id_game'],
      type: 'foreign key',
      name: 'games_users_id_game_fkey',
      references: {
        table: 'games',
        field: 'id'
      }
    })
    
    await queryInterface.addConstraint('games_users', {
      fields: ['id_user'],
      type: 'foreign key',
      name: 'games_users_id_user_fkey',
      references: {
        table: 'users',
        field: 'id'
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('scores', 'scores_id_games_users_fkey')
    await queryInterface.removeConstraint('game_logs', 'game_logs_id_games_users_fkey')
    await queryInterface.removeConstraint('games_users', 'games_users_id_game_fkey')
    await queryInterface.removeConstraint('games_users', 'games_users_id_user_fkey')
  }
};