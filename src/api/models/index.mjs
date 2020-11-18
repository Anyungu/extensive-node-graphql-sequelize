
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const { Sequelize } = require('sequelize');


import { define_candidate } from './candidate.model.mjs'


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



export const Candidate = define_candidate(sequelizeInstance);


sequelizeInstance.sync({ force: true })
    .then(() => {
        console.log(`Database & tables created!`)
    })

