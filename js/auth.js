// auth.js - Core User Database Logic
const STORAGE_KEYS = {
    USERS: 'bifu_users',
    CURRENT_USER: 'bifu_logged_in'
};

// Get all registered users
function getUsers() {
    const data = localStorage.getItem(STORAGE_KEYS.USERS);
    return data ? JSON.parse(data) : [];
}

// Get the person currently logged in
function getCurrentUser() {
    const data = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
    return data ? JSON.parse(data) : null;
}

// Register a new member
function registerUser(userData) {
    const users = getUsers();
    if (users.find(u => u.email.toLowerCase() === userData.email.toLowerCase())) {
        return { ok: false, message: 'This email is already part of the club.' };
    }
    
    userData.id = 'BIFU-' + Date.now();
    users.push(userData);
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
    return { ok: true };
}

// Log a member in
function loginUser(credentials) {
    const users = getUsers();
    const user = users.find(u => u.email.toLowerCase() === credentials.email.toLowerCase());
    
    if (!user) return { ok: false, message: 'Account not found.' };
    if (user.password !== credentials.password) return { ok: false, message: 'Incorrect password.' };

    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
    return { ok: true };
}

function logout() {
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
    window.location.href = 'index.html';
}