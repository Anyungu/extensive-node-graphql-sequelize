
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const { Sequelize } = require('sequelize');


import { } from '.candidate.model.mjs'


// sequelize instance
var sequelizeInstance = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',

    pool: {
        max: 50,
        min: 0,
        idle: 10000
    },

    // SQLite only
    storage: '../sqlite/database.sqlite'
});


