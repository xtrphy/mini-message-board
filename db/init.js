require('dotenv').config();
const pool = require('./pool');

async function dropMessagesTable() {
    try {
        await pool.query('DROP TABLE IF EXISTS messages;');
        console.log("✅ Таблица 'messages' удалена.");
    } catch (err) {
        console.error("❌ Ошибка при удалении таблицы:", err);
    }
}

async function createMessagesTable() {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS messages (
                id SERIAL PRIMARY KEY,
                text TEXT NOT NULL,
                username TEXT NOT NULL,
                added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
        console.log("✅ Таблица 'messages' успешно создана.");
    } catch (err) {
        console.error("❌ Ошибка при создании таблицы:", err);
    } finally {
        await pool.end();
    }
}

async function init() {
    await dropMessagesTable();
    await createMessagesTable();
}

init();
