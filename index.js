import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';

console.log('start')

const  db = await sqlite.open({
    filename:  './101.db',
    driver:  sqlite3.Database
});

// call the query using a promise
// const result = await db.all(`select * from greetings`);
// console.log(result)

// create a function that returns all the greetings from the db
async function getGreetings() {
const result = await db.all(`select * from greetings`);
return result;

}

const result = await getGreetings()
console.log(result)

// create a function that delete a specific greeting

// create a function that adds a new greeting
async function addGreeting(language, greeting) {
// sql statement type - insert


const sql = `insert into greetings (langauge, greeting) values (?, ?)`
await db.run(sql, [language, greeting]);

}

const result1 = await getGreetings()
console.log(result1);
console.log('=========================')

//await deleteGreeting(6);
//await deleteGreeting(8);
async function deleteGreeting(id) {
const sql = `delete from greetings where id = ?`;
await db.run(sql, [id])

}

await deleteGreetings(10);
console.log('=========================')

const result2 = await deleteGreeting()
console.log(result2)
console.log('end')

// create a function that updates a given greeting

// .then(result=> console.log(result));

// console.log()


const countResult = await db.get(`select count (*) as count from greetings`);

console.log(countResult.count);
// console.log(result);

console.log('end')