const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/candyTypes/${id}`).then(results => results.json())
    },
    getAll() {
        return fetch(`${remoteURL}/candyTypes`).then(results => results.json())
    }
}