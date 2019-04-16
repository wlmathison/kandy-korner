const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/stores/${id}`).then(results => results.json())
    },
    getAll() {
        return fetch(`${remoteURL}/stores`).then(results => results.json())
    }
}