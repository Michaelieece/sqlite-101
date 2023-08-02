import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';

const db = await sqlite.open({
    filename: './101.db',
    driver: sqlite3.Database
});

await db.migrate()

export async function getGreetings() {
    const result = await db.all(`select * from greetings`);
    return result;
    
    }
    
    const result = await getGreetings()
    console.log(result)

    // create a function that adds a new greeting
export async function addGreeting(language, greeting) {
    // sql statement type - insert
    
    
    const sql = `insert into greetings (langauge, greeting) values (?, ?)`
    await db.run(sql, [language, greeting]);
    
    }
    
    const result1 = await getGreetings()
    console.log(result1);
    console.log('=========================')
    

   export async function deleteGreeting(id) {
        const sql = `delete from greetings where id = ?`;
        await db.run(sql, [id])
        
        }
   
        export async function updateGreeting(language, greeting, id) {
            const sql = `update greetings set language = ?, greeting = ? where id = ?`;
            await db.run(sql, [language, greeting, id])        
        }
await updateGreeting ('Sepedi', 'Thobela', 4)
console.log("=================")