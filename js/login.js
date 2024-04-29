async function login(email, password) {
    try {
        const loginResponse = await fetch('http://176.109.110.111/auth/jwt/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `username=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
        });

        if (!loginResponse.ok) {
            throw new Error(`Ошибка входа: ${loginResponse.statusText}`);
        }

        const loginData = await loginResponse.json();
        // Сохранение токена в localStorage
        localStorage.setItem("auth_token", loginData.access_token);

        return loginData;

    } catch (error) {
        console.error('Ошибка:', error);
        throw error;
    }
}

document.getElementById('regForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        await login(email, password);
        // Действия после успешной регистрации и входа
        console.log('Успешный вход');
        window.location.href = "../index.html"
    } catch (error) {
        // Обработать ошибку
        console.error('Ошибка при регистрации и входе:', error);
    }
});
