const { countPostsByUser, averagePostsPerUser } = require('./concepts/aggregation');
const {userCreatedQuery, insertQuery, fetchAllUsers, updateUserController ,deleteUser} = require('./concepts/basic-queries');
const { getUsersWhere, getSortedUsers, getPaginatedUsers } = require('./concepts/filtering-sorting');
const { getUsersWithPosts, getAllUsersAndTheirPosts } = require('./concepts/joins');
const { createPostsTable, insertNewPosts } = require('./concepts/relationships');

// test basic queries
async function testBasicQueries(){
    try {
        // await userCreatedQuery(); // if i created table then dont want to create again this table
        
        // insert new users
        // await insertQuery("Ambrish Yadav", "ambrish@gmail.com")
        // await insertQuery("Dron Dana", "dron@gmail.com")
        // await insertQuery("Suhas Kanwar", "suhas@gmail.com")
        // await insertQuery("Aditya Yadav", "aditya@gmail.com")
        // await insertQuery("Kush Munjal", "kush@gmail.com")

        //get all users
        // console.log("Get all users");
        // const allUsers = await fetchAllUsers();
        // console.log(allUsers);

        // update user
        // console.log("update user email");
        // const updateUser = await updateUserController("Manthan Gohil", "manu@gmail.com");
        // console.log(updateUser);

        //delete user
        // console.log("Delete user");
        // const deleteOneUser = await deleteUser("Dron Dana");
        // console.log(deleteOneUser);   
        

    } catch (error) {
        console.error("Error", error);
        
    }
}

async function testFilterAndSortQueries(){
    try {
        // get users with username starting with a
        // const aFilteredUsers = await getUsersWhere("username LIKE 'A%'");
        // console.log(aFilteredUsers);

        // const sortedUsers = await getSortedUsers('created_at', 'DESC');
        // console.log(sortedUsers);

        // const paginated = await getPaginatedUsers(2,1);
        // console.log("paginated users:",paginated);
        
        
    } catch (error) {
        console.error(error);      
    }
}

async function testRelationshipQuery() {
    try {
        // const createPosts = await createPostsTable()
        // console.log(createPosts);

        const newPost = await insertNewPosts("title three", "Post-3", 5);
        console.log(newPost);
        
        
    } catch (error) {
        console.error(error);
        
    }
}

async function testJoinQueries(){
    try {
        // const usersWithPosts = await getUsersWithPosts()
        // console.log(usersWithPosts);
                
        const getAllUsersWithPost = await getAllUsersAndTheirPosts();
        console.log(getAllUsersWithPost);
        
    } catch (error) {
        console.log(error);
    }
}

async function testAggregationQueries(){
    try {
        // const postCount = await countPostsByUser();
        // console.log(postCount);

        const averagePostsPerUserInfo = await averagePostsPerUser();
        console.log(averagePostsPerUserInfo);
        
        
    } catch (error) {
        console.error(error);
    }
}

async function testAllQueries(){
    // await testBasicQueries();
    // await testFilterAndSortQueries();
    // await testRelationshipQuery()
    // await testJoinQueries();
    await testAggregationQueries();
}

testAllQueries()