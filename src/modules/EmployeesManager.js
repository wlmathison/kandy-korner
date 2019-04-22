import APIManager from "./APIManager"

export default Object.create(APIManager, {
    get: {
        value: function (id) {
            return APIManager.get("employees", id)
        }
    },
    getAll: {
        value: function () {
            return APIManager.getAll("employees")
        }
    },
    delete: {
        value: function (id) {
            return APIManager.delete("employees", id)
        }
    },
    removeAndList: {
        value: function (id) {
            return APIManager.removeAndList("employees", id)
        }
    },
    post: {
        value: function (object) {
            return APIManager.post("employees", object)
        }
    },
    put: {
        value: function (object) {
            return APIManager.put("employees", object)
        }
    }
})