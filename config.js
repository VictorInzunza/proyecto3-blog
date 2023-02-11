require('dotenv').config()

const configs = {

    api: {
        nodeEnv: process.env.NODE_ENV,
        port: process.env.PORT,
        host: process.env.HOST
    },
    db: {
        development: {
            dialect: process.env.DB_DIALECT,
            host: process.env.DB_HOST,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            define: {
                timestamps: true, //para utilizar por defecto el create_at y update_at
                underscored: true, //convertir a snake_case de forma automatica desde camelCase
                underscoredAll: true,
            }
        },
        test: {
            dialect: process.env.DB_DIALECT,
            host: process.env.DB_HOST,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            define: {
                timestamps: true, //para utilizar por defecto el create_at y update_at
                underscored: true, //convertir a snake_case de forma automatica desde camelCase
                underscoredAll: true,

            },
            production: {
                dialect: process.env.DB_DIALECT,
                host: process.env.DB_HOST,
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                define: {
                    timestamps: true, //para utilizar por defecto el create_at y update_at
                    underscored: true, //convertir a snake_case de forma automatica desde camelCase
                    underscoredAll: true,
                }
            }
        }
    }
}

module.exports = configs