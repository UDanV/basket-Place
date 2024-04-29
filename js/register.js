async function register(email, password, name) {
    try {
        console.log(email, password, name)
        const registerResponse = await fetch('http://176.109.110.111/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                nickname: name,
                role_id: 1,
                pathfile: "string",
                is_active: true,
                is_superuser: false,
                is_verified: false,
            })
        });

        if (!registerResponse.ok) {
            throw new Error(`Ошибка регистрации: ${registerResponse.statusText}`);
        }

        // Регистрация успешна, теперь входим в систему
        return await login(email, password);  // Вызов функции логина сразу после регистрации
    } catch (error) {
        console.error('Ошибка:', error);
        throw error;
    }
}

document.getElementById('regForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('nickname').value;

    try {
        await register(email, password, name);
        // Действия после успешной регистрации и входа
        console.log('Успешная регистрация и вход');
        window.location.href = "../index.html"
    } catch (error) {
        // Обработать ошибку
        console.error('Ошибка при регистрации и входе:', error);
    }
});
