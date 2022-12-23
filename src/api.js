const API_URL = "https://dummyjson.com";

export const getUsers = async () => {
    const response = await fetch(`${API_URL}/users`);
    const {users} = await response.json();
    return users;
};

export const getUserById = async (id) => {
    const response = await fetch(`${API_URL}/users/${id}`);
    const result = await response.json();
    return result;
};

export const login = async (data) => {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    });
    const result = await response.json();
    return result;
};
