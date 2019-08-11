import axios from 'axios';

export default {

    // USERS =======================================================

    // POSTS =======================================================

    // USER AUTHENTICATION ==========================================

    // Check if user is authenticated
    getUser: () => {
        console.log("Get User")
        return axios.get("/auth/user")
    },

    // Logout the user
    logout: () => {
        console.log("Logout User")
        // return axios.get("/auth/logout")
    }

}