import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Base URL for backend API

// ========================= USER AUTHENTICATION =========================

// ✅ Register User
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/auth/register`, userData);
        return response.data;
    } catch (error) {
        console.error("Registration error:", error.response?.data || error);
        throw error;
    }
};

// ✅ Login User
export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, userData);
        return response.data;
    } catch (error) {
        console.error("Login error:", error.response?.data || error);
        throw error;
    }
};

// ========================= COMMUNITY POSTS =========================

// ✅ Fetch All Posts
export const fetchPosts = async () => {
    try {
        const response = await axios.get(`${API_URL}/community/posts`);
        return response.data;
    } catch (error) {
        console.error("Error fetching posts:", error);
        return [];
    }
};

// ✅ Create a New Post
export const createPost = async (userId, content) => {
    try {
        await axios.post(`${API_URL}/community/posts`, { user_id: userId, content });
    } catch (error) {
        console.error("Error creating post:", error);
    }
};

// ========================= APPOINTMENTS =========================

// ✅ Fetch Appointments for a User
export const fetchAppointments = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/appointments/user/${userId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching appointments:", error);
        return [];
    }
};

// ✅ Create a New Appointment
export const createAppointment = async (appointmentData) => {
    try {
        const response = await axios.post(`${API_URL}/appointments`, appointmentData);
        return response.data;
    } catch (error) {
        console.error("Error creating appointment:", error);
        throw error;
    }
};

// ========================= USER PROFILE =========================

// ✅ Fetch User Profile
export const fetchUserProfile = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user profile:", error);
        return null;
    }
};

// ✅ Update User Profile
export const updateUserProfile = async (userId, updatedData) => {
    try {
        const response = await axios.put(`${API_URL}/users/${userId}`, updatedData);
        return response.data;
    } catch (error) {
        console.error("Error updating user profile:", error);
        throw error;
    }
};
