import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { DataTypes, Model } = require('sequelize');




// class level models can be added here
class Candidate extends Model { }


export const define_candidate = (sequelize) => {

    Candidate.init({
        // Model attributes are defined here
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        votePlus: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        voteMinus: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        uid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true // Automatically gets converted to SERIAL for postgres
        }
    }, {
        sequelize, // We need to pass the connection instance
        modelName: 'Candidate', // We need to choose the model name
        tableName: 'candidate',
        timestamps: true,
    });

}




