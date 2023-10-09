import mysql from "mysql2"

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"2002",
    database:"blog"
});

db.connect((err) => {
if(err){
    console.log("Error not connected")
}
else{
    console.log("Database Connected!")
}
}) 