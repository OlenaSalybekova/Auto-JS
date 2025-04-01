function fetchTodo() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => {
            if (!response.ok) {
                throw new Error("Erorr download TODO");
            }
            return response.json();
        })
        .catch(error => console.error("Error:", error));
}
function fetchUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => {
            if (!response.ok) {
                throw new Error("Error downloading USER");
            }
            return response.json();
        })
        .catch(error => console.error("Error:", error));
}

Promise.all([fetchTodo(), fetchUser()])
    .then(results => {
        const [todo, user] = results;
        console.log("Promise.all results:", { todo, user });
    })
    .catch(error => console.error("Error in Promise.all:", error));
Promise.race([fetchTodo(), fetchUser()])
    .then(result => console.log("Promise.race result:", result))
    .catch(error => console.error("Error in Promise.race:", error));






