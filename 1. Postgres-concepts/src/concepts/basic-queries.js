const db = require('../database/db');

const userCreatedQuery = async()=>{
    const userQuery = `
    CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )
    `;
    try {
        await db.query(userQuery);
        console.log("user table created successfully");
        
        
    } catch (error) {
        console.error("Error while creating user table",error);
        
    }
}

const insertQuery = async(username, email)=>{
    const insertUserQuery = `
    INSERT INTO users (username, email)
    VALUES ($1, $2)
    RETURNING *
    `;

    try {
        const res = await db.query(insertUserQuery, [username, email]);
        console.log("user inserted successfully:", res.rows[0]);
        
        return res.rows[0];
    } catch (error) {
        console.error("Error while inserting user:", error);
        
    }
}

const fetchAllUsers = async()=>{
    const getAllUsers = `
    SELECT * FROM users
    `
    try {
        const res = await db.query(getAllUsers);
        return res.rows;
        
    } catch (error) {
        console.error("Error to get all users:",error);
        throw error;
    }
}

const updateUserController = async(username, newEmail)=>{
    const updateUser = `
    UPDATE users
    SET email = $2
    WHERE username = $1
    RETURNING *
    `;
    try {
        const res = await db.query(updateUser,[username, newEmail]);
        if(res.rows.length > 0){
            console.log("User updated successfully:");
            return res.rows[0];
        }else{
            console.log("No user found with given username");
            return null
        }
        
    } catch (error) {
        console.error("Error updating the user", error);
    }
}

const deleteUser = async(username)=>{
    const deleteQuery = `
    DELETE FROM users
    WHERE username = $1
    RETURNING *
    `;
    try {
        const res = await db.query(deleteQuery, [username]);
        if(res.rows.length>0){
            console.log("User deleted successfully");
            return res.rows[0];
        }else{
            console.log(`Can not find user with this ${username}`);
            return null;   
        }
        
    } catch (error) {
        console.error("Error deleteing the user",error);
        
    }
}

module.exports = {userCreatedQuery, insertQuery, fetchAllUsers, updateUserController, deleteUser}