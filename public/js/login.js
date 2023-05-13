const loginFormHandler = async (event) => {
    event.preventDefault();

    //don't forget to fill in placeholders
    const email = document.querySelector('#X').value.trim();
    const password = document.querySelector('#X').value.trim();

    if (email && pasword) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            //fill this in when you decide if you're doing a dedicated 404 page or not
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();

    //once again, don't forget to fix the placeholders
    const name = document.querySelector('#X').value.trim();
    const email = document.querySelector('#X').value.trim();
    const password = document.querySelector('#X').value.trim();

    if (name && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json'},
        });
    }
};

//again, placeholders
document
    .querySelector('X')
    .addEventListener('submit', loginFormHandler);

document
    .querySelector('X')
    .addEventListener('submit', signupFormHandler);