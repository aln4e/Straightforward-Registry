'use strict';
module.exports = function(sequelize, DataTypes) {
  var Players = sequelize.define('Players', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    school: DataTypes.STRING,
    position: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    instanceMethods: {
      toJSON(){
        return{
          firstName:this.get('firstName'),
          lastName:this.get('lastName'),
          school:this.get('school'),
          position:this.get('position'),
          rating:this.get('rating')
        }
      }
    }
  });
  return Players;
};
