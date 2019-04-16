const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/employees/${id}`).then(results => results.json())
    },
    getAll() {
        return fetch(`${remoteURL}/employees`).then(results => results.json())
    }
}