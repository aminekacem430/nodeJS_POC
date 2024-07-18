const db = require('../db');


exports.setupDB = async function (req, res) {
    try {
        let { username, email } = req.body;
        let setup = await db.query(`CREATE DATABASE nodeJSDB ;` )
        let result = await db.query(`CREATE TABLE users (
    id int4 GENERATED ALWAYS AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1 NO CYCLE) NOT NULL,
    username varchar NOT NULL,
    email varchar NULL,
    password varchar NULL,
    CONSTRAINT user_pk PRIMARY KEY (id)
);` )
        res.status(201).json({
            message: 'DB initialized, table users created'
        })

    } catch (e) {
        res.status(413).json({
            message: 'Error Occurred',
            error: e.toString()
        })
    }
}

exports.getAll = async function (req, res) {
    try {
        let result = await db.query(`SELECT * from users`)
        let data = result.rows;
        res.json({
            data
        })
    } catch (e) {
        res.status(413).json({
            message: 'Error Occurred',
            error: e.toString()
        })
    }
}

exports.getSingle = async function (req, res) {
    try {
        let id = req.params.id;
        let result = await db.query(`SELECT * FROM users WHERE id = $1`, [id])
        let data = result.rows;
        if (data.length > 0) {
            res.json(data[0])
        } else {
            res.status(404).json({
                message: 'Record not found'
            });
        }

    } catch (e) {
        res.status(413).json({
            message: 'Error Occurred',
            error: e.toString()
        })
    }
}

exports.create = async function (req, res) {
    try {
        let { username, email } = req.body;
        let result = await db.query(`INSERT INTO users (username,email) VALUES ($1,$2)`, [username, email])
        res.status(201).json({
            message: 'Record Inserted'
        })

    } catch (e) {
        res.status(413).json({
            message: 'Error Occurred',
            error: e.toString()
        })
    }
}

exports.updateSingle = async function (req, res) {
    try {
        let id = req.params.id;
        let { username, email } = req.body;
        let result = await db.query(`UPDATE users SET username = $1, email = $2 WHERE id = $3`, [username, email, id])
        res.json({
            message: 'Record Updated'
        })

    } catch (e) {
        res.status(413).json({
            message: 'Error Occurred',
            error: e.toString()
        })
    }
}

exports.deleteSingle = async function (req, res) {
    try {
        let id = req.params.id;
        let result = await db.query(`DELETE FROM users WHERE id = $1`, [id])
        res.json({
            message: 'Record Deleted'
        })

    } catch (e) {
        res.status(413).json({
            message: 'Error Occurred',
            error: e.toString()
        })
    }
}