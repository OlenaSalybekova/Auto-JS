async function fetchTodo() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        if (!response.ok) {
            throw new Error("Error downloading TODO");
        }
        return await response.json();
    } catch (error) {
        console.error("Error:", error);
    }
}
async function fetchUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if (!response.ok) {
            throw new Error("Error downloading USER");
        }
        return await response.json();
    } catch (error) {
        console.error("Error:", error);
    }
}

(async () => {
    try {
        const resultsAll = await Promise.all([fetchTodo(), fetchUser()]);
        console.log("Promise.all results:", resultsAll);
        const resultRace = await Promise.race([fetchTodo(), fetchUser()]);
        console.log("Promise.race results:", resultRace);
    } catch (error) {
        console.error("Error in promises:", error);
    }
})();