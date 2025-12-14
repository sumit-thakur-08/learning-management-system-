import api from "./api";

// Export signup
export const signupUser = async (data) => {
    const res = await api.post("/auth/register", data);
    return res.data;
}


// Logim code
export const loginUser = async (data) => {
    const res = await api.post("/auth/login", data);
    return res.data;
};