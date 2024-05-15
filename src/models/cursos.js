'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cursos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cursos.belongsTo(models.Categoria, {
        foreignKey: 'categoria_id'
      });
      Cursos.belongsTo(models.Pessoa, {
        foreignKey: 'docente_id'
      });
      Cursos.hasMany(models.Matricula, {
        foreignKey: 'curso_id'
      });
    }
  }
  Cursos.init({
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    data_inicio: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Curso',
    tableName: 'cursos',
  });
  return Cursos;
};