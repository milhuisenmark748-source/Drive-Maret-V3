// signup-handler.js
document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    if (!signupForm) return;

    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const pass = document.getElementById('reg-pass').value;
        const confirm = document.getElementById('reg-pass-confirm').value;
        const avatarFile = document.getElementById('avatar').files[0];

        if (pass !== confirm) {
            alert("Passwords do not match!");
            return;
        }

        let avatarBase64 = 'img/default-avatar.png'; // Fallback
        if (avatarFile) {
            avatarBase64 = await convertImage(avatarFile);
        }

        const newUser = {
            fullname: document.getElementById('reg-name').value,
            email: document.getElementById('reg-email').value,
            username: document.getElementById('reg-user').value,
            password: pass,
            avatar: avatarBase64
        };

        const result = registerUser(newUser);
        if (result.ok) {
            alert("Registration successful! Welcome to BIFU.");
            window.location.href = 'login.html';
        } else {
            alert(result.message);
        }
    });
});

function convertImage(file) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(file);
    });
}