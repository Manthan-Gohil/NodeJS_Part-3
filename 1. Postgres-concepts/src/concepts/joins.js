const db = require('../database/db');

// inner join -> returns only the rows where there is a match in both the tables

async function getUsersWithPosts(){
    const getUsersWithPostsQuery = `
    SELECT users.id, users.username, posts.title
    FROM users
    INNER JOIN posts 
    ON users.id = posts.user_id
    `;
    try {
        const result = await db.query(getUsersWithPostsQuery);
        return result.rows
        
    } catch (error) {
        console.error(error);
    }
}

async function getAllUsersAndTheirPosts(){
    const getAllUsersAndTheirPostsQuery = `
    SELECT users.id, users.username, posts.title
    FROM users
    LEFT JOIN posts
    ON users.id = posts.user_id
    `;
    try {
        const result = await db.query(getAllUsersAndTheirPostsQuery)
        return result.rows;
        
    } catch (error) {
        console.error(error);
    }
}

module.exports = {getUsersWithPosts, getAllUsersAndTheirPosts}