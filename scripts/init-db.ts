import { sql } from '../app/config/db';

async function initDb() {
    try {
        console.log('Initializing database...');
        await sql`
            CREATE TABLE IF NOT EXISTS messages_table (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                message TEXT NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `;
        console.log('Successfully created messages_table.');
        process.exit(0);
    } catch (error) {
        console.error('Error initializing database:', error);
        process.exit(1);
    }
}

initDb();
