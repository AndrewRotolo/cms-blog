const logout = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        //add in something here depending on whether or not I make a 404 page
    }
};

//fix the placeholders
document.querySelector('#X').addEventListener('click', logout);