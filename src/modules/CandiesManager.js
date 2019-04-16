const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/candies/${id}`).then(results => results.json())
    },
    getAll() {
        return fetch(`${remoteURL}/candies`).then(results => results.json())
    },
    removeAndList(id) {
        return fetch(`${remoteURL}/candies/${id}`, {
            method: "DELETE"
        }).then(results => results.json())
        .then(this.getAll)
    }
}