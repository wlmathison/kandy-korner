const remoteURL = "http://localhost:5002"

export default Object.create(null, {
    get: {
        value: function (resource, id) {
            return fetch(`${remoteURL}/${resource}/${id}`).then(results => results.json())
        }
    },
    getAll: {
        value: function (resource) {
            return fetch(`${remoteURL}/${resource}`).then(results => results.json())
        }
    },
    delete: {
        value: function (resource, id) {
            return fetch(`${remoteURL}/${resource}/${id}`, {
                method: "DELETE"
            }).then(results => results.json())
        }
    },
    removeAndList: {
        value: function (resource, id) {
            return fetch(`${remoteURL}/${resource}/${id}`, {
                method: "DELETE"
            }).then(results => results.json())
                .then(() => this.getAll(`${resource}`))
        }
    },
    post: {
        value: function (resource, object) {
            return fetch(`${remoteURL}/${resource}`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(object)
            }).then(results => results.json())
        }
    },
    put: {
        value: function (resource, object) {
            return fetch(`${remoteURL}/${resource}/${object.id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(object)
            }).then(results => results.json())
        }
    }
})