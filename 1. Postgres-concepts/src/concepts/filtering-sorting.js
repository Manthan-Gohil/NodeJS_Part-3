const db = require('../database/db');

// WHERE Clause

async function getUsersWhere(condition){
    const userQuery = `
    SELECT * 
    FROM users
    WHERE ${condition}
    `;

    try {
        const result = await db.query(userQuery);
        return result.rows;
        
    } catch (error) {
        console.error("Error while get user where", error);
        
    }
}

async function getSortedUsers(column, order='ASC'){
    const getSortedUsersQuery = `
    SELECT * FROM users
    ORDER BY ${column} ${order}
    `;

    try {
        const result = await db.query(getSortedUsersQuery);
        return result.rows;
    } catch (error) {
        console.error("Error get sorted user:", error);
        
    }
}

async function getPaginatedUsers(limit, offset){
    const getPaginatedQuery = `
    SELECT * FROM users
    LIMIT $1 OFFSET $2
    `;
    try {
        const result = await db.query(getPaginatedQuery, [limit, offset]);
        return result.rows;
        
    } catch (error) {
        console.error("Error:",error);        
    }
}

module.exports = {getUsersWhere, getSortedUsers, getPaginatedUsers}