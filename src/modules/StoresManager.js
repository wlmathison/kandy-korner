import APIManager from "./APIManager"

export default Object.create(APIManager, {
    get: {
        value: function (id) {
            return APIManager.get("stores", id)
        }
    },
    getAll: {
        value: function () {
            return APIManager.getAll("stores")
        }
    },
    delete: {
        value: function (id) {
            return APIManager.delete("stores", id)
        }
    },
    removeAndList: {
        value: function (id) {
            return APIManager.removeAndList("stores", id)
        }
    }
})