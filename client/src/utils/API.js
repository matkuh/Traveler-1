import axios from 'axios';

export default {

    // USERS =======================================================

    // POSTS =======================================================

    // USER AUTHENTICATION ==========================================

    // Check if user is authenticated
    getUser: () => {
        return axios.get("/auth/user")
    },

    // Logout the user
    logout: () => {
        return axios.get("/auth/logout")
    }

}