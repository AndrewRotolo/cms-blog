const editPostHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        //placeholders
        const title = document.querySelector('#X').value.trim();
        const body = document.querySelector('#X').value.trim();

        if (title && body) {
            const response = await fetch(`/api/posts/${id}`, {
                method: 'PUT',
                body: JSON.stringify({ title, body }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                //placeholder
                document.location.replace('/placeholder')
            } else {
                //404 page?
            }
        }
    }
}

const deletePostHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        
        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE'
        });
        if (response.ok) {
            //placeholder
            document.location.replace('/placeholder')
        } else {
            //404 page?
        }
    }
}

//placeholders
document.querySelector('#X').addEventListener('click', editPostHandler);
document.querySelector('#X').addEventListener('click', deletePostHandler);