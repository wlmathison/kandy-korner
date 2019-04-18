import APIManager from "./APIManager"

export default Object.create(APIManager, {
    get: {
        value: function (id) {
            return APIManager.get("candyTypes", id)
        }
    },
    getAll: {
        value: function () {
            return APIManager.getAll("candyTypes")
        }
    },
    delete: {
        value: function (id) {
            return APIManager.delete("candyTypes", id)
        }
    },
    removeAndList: {
        value: function (id) {
            return APIManager.removeAndList("candyTypes", id)
        }
    }
})