// CALLBACK
const urlApi = 'https://v2.jokeapi.dev/joke/Any';
function fetchDataWithCallback(error, data) {
    if (error) {
        console.error(error);
    } else {
        console.log(data);
    }
};

fetch(urlApi)
    .then(response => {
        if (!response.ok) {
            throw new Error('This is an Error');
        } else {
            return response.json();
        }
    })
    .then(data => {
        fetchDataWithCallback(null, data);
    })
    .catch(error => {
        throw new Error('Invalid URL');
    });


// PROMISE
function fetchDataFromApi(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('This is an Error');
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(new Error('Invalid URL'));
            });
    });
}
// Usage
fetchDataFromApi(urlApi)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });


// ASYN AWAIT
async function fetchDataWithAsyncAwait() {
    try {
        const response = await fetch(urlApi);

        if (!response.ok) {
            throw new Error('This is an Error');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}

// Example usage
(async () => {
    try {
        const data = await fetchDataWithAsyncAwait();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
})();