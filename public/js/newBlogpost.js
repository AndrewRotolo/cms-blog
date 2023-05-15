const newPostHandler = async (event) => {
    event.preventDefault();

    //fix placeholders
    const title = document.querySelector('#X').value.trim();
    const body = document.querySelector('#X').value.trim();

    if (title && body) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, body }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            //fix placeholder
            document.location.replace('/placeholder')
        } else {
            //404 page?
        }
    }
};

//fix placeholder
document.querySelector('#X').addEventListener('submit', newPostHandler);