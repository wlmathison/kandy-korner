import APIManager from "./APIManager"

export default Object.create(APIManager, {
    get: {
        value: function (id) {
            return APIManager.get("candies", id)
        }
    },
    getAll: {
        value: function () {
            return APIManager.getAll("candies")
        }
    },
    delete: {
        value: function (id) {
            return APIManager.delete("candies", id)
        }
    },
    removeAndList: {
        value: function (id) {
            return APIManager.removeAndList("candies", id)
        }
    }
})