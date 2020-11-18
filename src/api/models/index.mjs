
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const { Sequelize } = require('sequelize');


import { define_candidate } from './candidate.model.mjs'
import { dev, stage, prod } from '../../config/db.mjs'


const env = process.env.NODE_ENV_LOL


var current_env

var current_env_sync = () => {

    console.log(env)
    if (env === 'dev') {
        current_env = dev
    } else if (env === 'stage') {
        current_env = stage
    } else {
        current_env = prod
    }
}

current_env_sync()


// sequelize instance
var sequelizeInstance = new Sequelize(current_env.DB, current_env.USER, current_env.PASSWORD, {
    host: current_env.HOST,
    dialect: current_env.dialect,

    pool: current_env.pool,

    // SQLite only
    storage: '../sqlite/database.sqlite'
});



export const Candidate = define_candidate(sequelizeInstance);


sequelizeInstance.sync({ force: true })
    .then(() => {
        console.log(`Database & tables created!`)
    })

